import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";

import "./editor.scss";

const TEMPLATE = [
	["core/image"],
	[
		"core/group",
		{ className: "forced-fun-content" },
		[
			["core/heading", { placeholder: "Heading" }],
			["core/paragraph", { placeholder: "Content" }],
			["core/buttons"],
		],
	],
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({ attributes, setAttributes }) {
	const { layout } = attributes;

	const blockProps = useBlockProps({
		className: `forced-fun-layout ${layout}`,
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Layout", "forced-fun-plugin")}>
					<SelectControl
						label={__("Layout", "forced-fun-plugin")}
						value={layout}
						options={[
							{ label: "Image Left", value: "image-left" },
							{ label: "Image Right", value: "image-right" },
							{ label: "No Image", value: "no-image" },
						]}
						onChange={(value) => setAttributes({ layout: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks template={TEMPLATE} templateLock={true} />
		</div>
	);
}

export default Edit;
