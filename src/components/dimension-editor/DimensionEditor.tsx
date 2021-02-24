import { add } from '../../icons/icons';
import { EditorSection } from '../editor-section/EditorSection';
import '../dimension-editor/DimensionEditor.css';

interface DimensionEditorProps {
	title: string;
}

export const DimensionEditor = ({ title }: DimensionEditorProps) => {
	return (
		<EditorSection>
			<div className={'editor-section-header'}>
				<h2>{title}</h2>
				<button className={'editor-section-add-button'}>{add}</button>
			</div>
		</EditorSection>
	);
};
