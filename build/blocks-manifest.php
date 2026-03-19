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
			'layout' => array(
				'type' => 'string',
				'default' => 'image-left'
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
			)
		),
		'allowedBlocks' => array(
			'core/button',
			'core/image',
			'core/paragraph'
		),
		'textdomain' => 'forced-fun-plugin',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
