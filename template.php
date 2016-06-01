<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function andromeda_preprocess_html(&$variables) {
  drupal_add_js('https://use.fontawesome.com/971844ebf1.js', array('type' => 'external'));
}