import React from 'react';
import { IGridState } from '../app/App';
import { ColumnEditor } from '../column-editor/ColumnEditor';
import { ContainerEditor } from '../container-editor/ContainerEditor';
import { GapEditor } from '../gap-editor/GapEditor';
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
			<ColumnEditor onInputChange={onInputChange} gridState={gridState} />
			<GapEditor onInputChange={onInputChange} gridState={gridState} />
			<ContainerEditor onInputChange={onInputChange} gridState={gridState} />
		</div>
	);
};
