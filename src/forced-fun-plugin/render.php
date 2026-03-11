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
?>
<div <?php echo $block_props; ?>>

    <div class="forced-fun-image-text">

        <div class="forced-fun-image">
            <div class="forced-fun-image-placeholder">
                <?php echo esc_html__( 'Image', 'forced-fun-plugin' ); ?>
            </div>
        </div>

        <div class="forced-fun-content">

            <h3><?php echo esc_html__( 'Heading placeholder', 'forced-fun-plugin' ); ?></h3>

            <p><?php echo esc_html__( 'Paragraph content goes here.', 'forced-fun-plugin' ); ?></p>

            <button class="forced-fun-button">
                <?php echo esc_html__( 'Action', 'forced-fun-plugin' ); ?>
            </button>

        </div>

    </div>

</div>