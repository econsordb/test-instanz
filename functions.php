    <?php

/**
*  Shortcodes
*/
require_once get_stylesheet_directory() . '/inc/shortcodes.php';

    wp_enqueue_script('jquery', get_stylesheet_directory_uri() .'/slider/jquery.min.js', array(), null, true);
    wp_enqueue_style('slick-style', get_stylesheet_directory_uri() . '/slider/slick.css');
    wp_enqueue_script('slick-script', get_stylesheet_directory_uri() . '/slider/slick.min.js', array('jquery'), null, true);
    wp_enqueue_script('custom.js', get_stylesheet_directory_uri() . '/slider/custom.js', array('jquery', 'slick-script'), null, true);

// register webpack compiled js and css with theme
function enqueue_webpack_scripts():void {

    $manifest = json_decode(file_get_contents(__DIR__ . '/manifest.json'), true);
    $templateDirectoryUri = get_stylesheet_directory_uri() . '/';
    foreach (array_keys($manifest) as $inputFile) {
        $isScript = str_ends_with($inputFile, '.js');
        foreach ((array) $manifest[$inputFile] as $outputFile) {
            if ($isScript) {
                wp_enqueue_script(basename($outputFile), $templateDirectoryUri . $outputFile);
                continue;
            }
            wp_enqueue_style(basename($outputFile), $templateDirectoryUri . $outputFile);
        }
    }

}
add_action( 'wp_enqueue_scripts', 'enqueue_webpack_scripts' );

function add_file_types_to_uploads($file_types){
    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes );
    return $file_types;
    }
    
/*wp_deregister_script('jquery');
wp_enqueue_script('jquery', '/js/js/jquery.min.js', array(), null, true);*/

