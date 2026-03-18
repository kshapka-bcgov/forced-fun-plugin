<?php
// This file is generated. Do not modify it manually.
return array(
	'forced-fun-plugin' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/forced-fun-plugin',
		'version' => '0.1.0',
		'title' => 'Forced Fun Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Display fun text with fun visual content.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => true,
				'link' => true,
				'gradients' => true
			)
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '16:9'
			),
			'headingText' => array(
				'type' => 'string',
				'default' => 'Heading placeholder'
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'paragraphText' => array(
				'type' => 'string',
				'default' => 'Paragraph placeholder'
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'allowedBlocks' => array(
			'core/button'
		),
		'textdomain' => 'forced-fun-plugin',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
