import React from 'react';
import { add, rowGap } from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { TextInput } from '../text-input/TextInput';
import './ColumnEditor.css';

interface ColumnEditorProps {
	gridState: IGridState;
	onInputChange: (e: any) => void;
}

export const ColumnEditor = ({
	gridState,
	onInputChange,
}: ColumnEditorProps) => {
	function handleAddColumnPress() {
		alert('Clicked add column');
	}

	function handleDeleteColumnPress() {
		alert('Clicked delete column');
	}

	return (
		<EditorSection>
			<div className={'editor-section-header'}>
				<h2>Columns</h2>
				<button
					onClick={handleAddColumnPress}
					className={'editor-section-add-button'}
				>
					{add}
				</button>
			</div>
		</EditorSection>
	);
};
