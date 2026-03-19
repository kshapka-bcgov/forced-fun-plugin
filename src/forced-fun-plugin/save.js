import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

function Save({ attributes }) {
	const { layout } = attributes;

	const blockProps = useBlockProps.save({
		className: `forced-fun-layout ${layout}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
export default Save;
