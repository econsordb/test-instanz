const path = require('path');

// css extraction and minification
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

// clean out build dir in-between builds
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
    {
        entry: {
            'main': [
                './js/index.js',
                './scss/style.scss'
            ]
        },
        output: {
            filename: './build/[name].min.js',
            path: path.resolve(__dirname)
        },
        module: {
            rules: [
                // js babelization
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                // sass compilation
                {
                    test: /\.(sass|scss)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                // loader for webfonts (only required if loading custom fonts)
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: './fonts/[name][ext]',
                    }
                },
                // loader for images and icons (only required if css references image files)
                {
                    test: /\.(png|jpg|gif)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: './images/[name][ext]',
                    }
                },
            ]
        },
        plugins: [
            // clear out build directories on each build
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [
                    './build/*'
                ]
            }),
            // css extraction into dedicated file
            new MiniCssExtractPlugin({
                filename: './build/style.min.css'
            }),
            new WebpackManifestPlugin({
                publicPath: ''
            })
        ],
        optimization: {
            // minification - only performed when mode = production
            minimizer: [
                // js minification - special syntax enabling webpack 5 default terser-webpack-plugin
                `...`,
                // css minification
                new CssMinimizerPlugin(),
            ]
        },
    }
];
