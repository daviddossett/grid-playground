import React from 'react';
import { columnGap, rowGap } from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { TextInput } from '../text-input/TextInput';
import '../gap-editor/GapEditor.css';

interface GapEditorProps {
	onInputChange: (e: any) => void;
	gridState: IGridState;
}

export const GapEditor = ({ onInputChange, gridState }: GapEditorProps) => {
	return (
		<EditorSection>
			<h2>Gaps</h2>
			<div className={'input-row'}>
				<TextInput
					label={'Column'}
					name={'columnGap'}
					type={'number'}
					icon={columnGap}
					onChange={onInputChange}
					value={gridState.columnGap}
				/>
				<TextInput
					label={'Row'}
					name={'rowGap'}
					type={'number'}
					icon={rowGap}
					onChange={onInputChange}
					value={gridState.rowGap}
				/>
			</div>
		</EditorSection>
	);
};
