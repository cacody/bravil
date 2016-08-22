<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function bravil_preprocess_html(&$variables) {
  drupal_add_js('https://use.fontawesome.com/971844ebf1.js', array('type' => 'external'));
}

function bravil_menu_tree__menu_research_day($variables){
    return "<ul class=\"nav nav-pills\">\n" . $variables['tree'] . "</ul>\n";
}

function bravil_menu_tree__menu_ohs_phd($variables){
    return "<ul class=\"nav nav-pills\">\n" . $variables['tree'] . "</ul>\n";
}

