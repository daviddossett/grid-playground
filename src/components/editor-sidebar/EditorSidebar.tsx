import React from 'react';
import {
	columnCount,
	columnGap,
	rowCount,
	rowGap,
	paddingTopBottom,
	paddingLeftRight,
} from '../../icons/icons';
import { IGridState } from '../app/App';
import { TextInput } from '../text-input/TextInput';
import './EditorSidebar.css';

interface EditorSidebarProps {
	gridState: IGridState;
	onClose?: () => void;
	onInputChange: (e: any) => void;
	className?: string;
}

export const EditorSidebar = ({
	gridState,
	onClose,
	onInputChange,
	className,
}: EditorSidebarProps) => {
	return (
		<div className={`${className} editor-sidebar`}>
			<h1>Grid Playground</h1>
			<TextInput
				type={'number'}
				name={'columnCount'}
				label={'Column count'}
				value={gridState.columnCount}
				onChange={onInputChange}
				icon={columnCount}
			/>
			<TextInput
				type={'number'}
				name={'columnGap'}
				label={'Column gap'}
				value={gridState.columnGap}
				onChange={onInputChange}
				icon={columnGap}
			/>
			<TextInput
				type={'number'}
				name={'rowCount'}
				label={'Row count'}
				value={gridState.rowCount}
				onChange={onInputChange}
				icon={rowCount}
			/>
			<TextInput
				type={'number'}
				name={'rowGap'}
				label={'Row gap'}
				value={gridState.rowGap}
				onChange={onInputChange}
				icon={rowGap}
			/>

			<TextInput
				type={'number'}
				name={'paddingTopBottom'}
				label={'Padding Top and Bottom'}
				value={gridState.paddingTopBottom}
				onChange={onInputChange}
				icon={paddingTopBottom}
			/>
			<TextInput
				type={'number'}
				name={'paddingLeftRight'}
				label={'Padding Left and Right'}
				value={gridState.paddingLeftRight}
				onChange={onInputChange}
				icon={paddingLeftRight}
			/>
		</div>
	);
};
