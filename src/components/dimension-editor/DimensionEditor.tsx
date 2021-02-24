import { add } from '../../icons/icons';
import { EditorSection } from '../editor-section/EditorSection';
import '../dimension-editor/DimensionEditor.css';

interface DimensionEditorProps {
	title: string;
	onAddButtonPress: () => void;
	onDeleteButtonPress: () => void;
}

export const DimensionEditor = ({
	title,
	onAddButtonPress,
	onDeleteButtonPress,
}: DimensionEditorProps) => {
	return (
		<EditorSection>
			<div className={'editor-section-header'}>
				<h2>{title}</h2>
				<button
					onClick={onAddButtonPress}
					className={'editor-section-add-button'}
				>
					{add}
				</button>
			</div>
		</EditorSection>
	);
};
