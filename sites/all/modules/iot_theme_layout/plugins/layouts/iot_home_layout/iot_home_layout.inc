<?php
// Plugin definition
$plugin = array(
  'title'     => t('IOT Home Layout'),
  'icon'      => 'iot-home-layout.png',
  'category'  => t('IOT Layout'),
  'theme'     => 'iot_home_layout',
  'regions'   => array(
    'header'              => t('Header'),
    'sidebar'             => t('Content Sidebar'),
    'contentmain'         => t('Content'),
    'contentbottom'       => t('Content Bottom'),
    'footerpanelfirst'    => t('Footer Panel First'),
    'footerpanelseccond'  => t('Footer Panel Seccond'),
    'footerpanelthird'    => t('Footer Panel Third'),
    'footer'              => t('Footer'),
  ),
);
