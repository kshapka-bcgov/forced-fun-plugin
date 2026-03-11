/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {

	const blockProps = useBlockProps();
	
	return (
		<div { ...blockProps }>

			<div className="forced-fun-image-text">

				<div className="forced-fun-image">
					<div className="forced-fun-image-placeholder">
						{ __('Image', 'forced-fun-plugin') }
					</div>
				</div>

				<div className="forced-fun-content">

					<h3>
						{ __('Heading placeholder', 'forced-fun-plugin') }
					</h3>

					<p>
						{ __('Paragraph content goes here.', 'forced-fun-plugin') }
					</p>

					<button className="forced-fun-button">
						{ __('Action', 'forced-fun-plugin') }
					</button>

				</div>

			</div>

		</div>
	);
}
