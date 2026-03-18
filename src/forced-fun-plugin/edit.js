/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InnerBlocks,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import {
	PanelBody,
	SelectControl,
	Button,
	TextControl,
	ToggleControl,
} from "@wordpress/components";

const ALLOWED_BLOCKS = ["core/button", "core/image"];
const BUTTON_TEMPLATE = [["core/button", { text: "Action" }]];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({ attributes, setAttributes }) {
	const {
		layout,
		imageUrl,
		aspectRatio,
		headingText,
		headingLevel,
		paragraphText,
	} = attributes;
	const blockProps = useBlockProps();

	// Layout settings
	const showImage = "no-image" !== layout;
	const imageFirst = "image-left" === layout;

	// Aspect Ratio settings
	const ratioMap = {
		"16:9": "56.25%",
		"4:3": "75%",
		"1:1": "100%",
		"3:2": "66.66%",
	};
	const paddingTop = ratioMap[aspectRatio] || "56.25%";

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Layout", "forced-fun-plugin")}>
					<SelectControl
						label={__("Layout", "forced-fun-plugin")}
						value={attributes.layout}
						options={[
							{ label: "Image Left", value: "image-left" },
							{ label: "Image Right", value: "image-right" },
							{ label: "No Image", value: "no-image" },
						]}
						onChange={(value) => setAttributes({ layout: value })}
					/>
				</PanelBody>
				{showImage && (
					<PanelBody title={__("Image Settings", "forced-fun-plugin")}>
						<SelectControl
							label={__("Aspect Ratio", "forced-fun-plugin")}
							value={aspectRatio}
							options={[
								{ label: "16:9", value: "16:9" },
								{ label: "4:3", value: "4:3" },
								{ label: "1:1", value: "1:1" },
								{ label: "3:2", value: "3:2" },
							]}
							onChange={(value) => setAttributes({ aspectRatio: value })}
						/>
					</PanelBody>
				)}
				<PanelBody title={__("Heading Settings", "forced-fun-plugin")}>
					<SelectControl
						label={__("Heading Level", "forced-fun-plugin")}
						value={headingLevel}
						options={[
							{ label: "H2", value: "h2" },
							{ label: "H3", value: "h3" },
						]}
						onChange={(value) => setAttributes({ headingLevel: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="forced-fun-image-text">
				{showImage && imageFirst && (
					<div
						className="forced-fun-image"
						style={{
							position: "relative",
							width: "100%",
							paddingTop,
							overflow: "hidden",
						}}
					>
						{imageUrl ? (
							<img
								src={imageUrl}
								alt={__("Selected image", "forced-fun-plugin")}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({ imageUrl: media.url })}
									allowedTypes={["image"]}
									value={imageUrl}
									render={({ open }) => (
										<Button
											onClick={open}
											className="forced-fun-image-placeholder"
										>
											{__("Select Image", "forced-fun-plugin")}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
					</div>
				)}
				<div className="forced-fun-content">
					<RichText
						tagName={headingLevel}
						value={headingText}
						onChange={(value) => setAttributes({ headingText: value })}
						placeholder={__("Heading", "forced-fun-plugin")}
					/>
					<RichText
						tagName="p"
						value={paragraphText}
						onChange={(value) => setAttributes({ paragraphText: value })}
						placeholder={__("Content", "forced-fun-plugin")}
					/>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						templateLock={false}
					/>
				</div>
				{showImage && !imageFirst && (
					<div
						className="forced-fun-image"
						style={{
							position: "relative",
							width: "100%",
							paddingTop,
							overflow: "hidden",
						}}
					>
						{imageUrl ? (
							<img
								src={imageUrl}
								alt={__("Selected image", "forced-fun-plugin")}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({ imageUrl: media.url })}
									allowedTypes={["image"]}
									value={imageUrl}
									render={({ open }) => (
										<Button
											onClick={open}
											className="forced-fun-image-placeholder"
										>
											{__("Select Image", "forced-fun-plugin")}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Edit;
