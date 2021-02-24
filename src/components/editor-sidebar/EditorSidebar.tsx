import React from 'react';
import {
	columnCount,
	columnGap,
	paddingLeftRight,
	paddingTopBottom,
	rowCount,
	rowGap,
} from '../../icons/icons';
import { IGridState } from '../app/App';
import { DimensionEditor } from '../dimension-editor/DimensionEditor';
import { EditorSection } from '../editor-section/EditorSection';
import { TextInput } from '../text-input/TextInput';
import './EditorSidebar.css';

interface EditorSidebarProps {
	gridState: IGridState;
	onInputChange: (e: any) => void;
	className?: string;
}

export const EditorSidebar = ({
	gridState,
	onInputChange,
	className,
}: EditorSidebarProps) => {
	return (
		<div className={`${className} editor-sidebar`}>
			<header className={'editor-header'}>
				<h1>Grid Playground</h1>
			</header>
			<DimensionEditor title={'Columns'} />
			<DimensionEditor title={'Rows'} />
			<EditorSection>
				<h2>Container</h2>
				<div className={'input-row'}>
					<TextInput
						label={'Vertical'}
						name={'paddingTopBottom'}
						type={'number'}
						icon={paddingTopBottom}
						onChange={onInputChange}
						value={gridState.paddingTopBottom}
					/>
					<TextInput
						label={'Horizontal'}
						name={'paddingLeftRight'}
						type={'number'}
						icon={paddingLeftRight}
						onChange={onInputChange}
						value={gridState.paddingLeftRight}
					/>
				</div>
			</EditorSection>
		</div>
	);
};
