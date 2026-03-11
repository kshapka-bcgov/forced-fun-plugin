<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$block_props = get_block_wrapper_attributes();
// Aspect ratio
$ratio_map = array(
	'16:9' => '56.25%',
	'4:3' => '75%',
	'1:1' => '100%',
	'3:2' => '66.66%',
);
$padding_top = isset($attributes['aspectRatio']) && isset($ratio_map[$attributes['aspectRatio']])
	? $ratio_map[$attributes['aspectRatio']]
	: '56.25%';

// Heading
$heading_level = !empty($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h3';
$heading_text = !empty($attributes['headingText']) ? $attributes['headingText'] : __('Heading', 'forced-fun-plugin');

// Paragraph
$paragraph_text = !empty($attributes['paragraphText']) ? $attributes['paragraphText'] : __('Content', 'forced-fun-plugin');

// Button
$button_text = !empty($attributes['buttonText']) ? $attributes['buttonText'] : __('Click me', 'forced-fun-plugin');
$button_url = !empty($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '#';
?>
<div <?php echo $block_props; ?>>
	<div class="forced-fun-image-text">
		<div class="forced-fun-image"
			style="position:relative;width:100%;padding-top:<?php echo esc_attr($padding_top); ?>;overflow:hidden;">
			<?php if (!empty($attributes['imageUrl'])): ?>
				<img src="<?php echo esc_url($attributes['imageUrl']); ?>"
					alt="<?php esc_attr_e('Selected image', 'forced-fun-plugin'); ?>"
					style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;" />
			<?php else: ?>
				<div class="forced-fun-image-placeholder"
					style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#eee;">
					<?php esc_html_e('Image', 'forced-fun-plugin'); ?>
				</div>
			<?php endif; ?>
		</div>

		<div class="forced-fun-content">
			<<?php echo esc_html($heading_level); ?>><?php echo esc_html($heading_text); ?></<?php echo esc_html($heading_level); ?>>
			<p><?php echo esc_html($paragraph_text); ?></p>
			<button class="forced-fun-button" <?php if ($button_url): ?>
					onclick="window.location.href='<?php echo esc_url($button_url); ?>'" <?php endif; ?>>
				<?php echo esc_html($button_text); ?>
			</button>
		</div>
	</div>
</div>