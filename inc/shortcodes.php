<?php

$includeurl = get_stylesheet_directory() . '/PHPElements/';

foreach (glob($includeurl."/*.php") as $filename) {
    include $filename;
}
