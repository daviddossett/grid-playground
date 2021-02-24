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
import { ContainerEditor } from '../container-editor/ContainerEditor';
import { DimensionEditor } from '../dimension-editor/DimensionEditor';
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
			<ContainerEditor onInputChange={onInputChange} gridState={gridState} />
		</div>
	);
};
