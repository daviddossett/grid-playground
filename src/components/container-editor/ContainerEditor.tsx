import React from 'react';
import { paddingTopBottom, paddingLeftRight } from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { TextInput } from '../text-input/TextInput';
import '../container-editor/ContainerEditor.css';

interface ContainerEditorProps {
	onPaddingChange: (e: any) => void;
	gridState: IGridState;
}

export const ContainerEditor = ({
	onPaddingChange,
	gridState,
}: ContainerEditorProps) => {
	return (
		<EditorSection>
			<h2>Container</h2>
			<div className={'input-row'}>
				<TextInput
					label={'Vertical'}
					name={'paddingTopBottom'}
					type={'number'}
					icon={paddingTopBottom}
					onChange={onPaddingChange}
					value={gridState.paddingTopBottom}
				/>
				<TextInput
					label={'Horizontal'}
					name={'paddingLeftRight'}
					type={'number'}
					icon={paddingLeftRight}
					onChange={onPaddingChange}
					value={gridState.paddingLeftRight}
				/>
			</div>
		</EditorSection>
	);
};
