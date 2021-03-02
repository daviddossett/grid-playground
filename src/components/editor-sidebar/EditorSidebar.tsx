import React from 'react';
import { IGridState } from '../app/App.types';
import { ColumnEditor } from '../column-editor/ColumnEditor';
import { ContainerEditor } from '../container-editor/ContainerEditor';
import { GapEditor } from '../gap-editor/GapEditor';
import './EditorSidebar.css';

interface EditorSidebarProps {
	gridState: IGridState;
	onAddColumn: () => void;
	onDeleteColumn: (e: any) => void;
	onGapChange: (e: any) => void;
	onPaddingChange: (e: any) => void;
	onUpdateColumnWidth: (e: any) => void;
	onUpdateColumnMode: (e: any) => void;
	className?: string;
}

export const EditorSidebar = ({
	gridState,
	onAddColumn,
	onDeleteColumn,
	onGapChange,
	onPaddingChange,
	onUpdateColumnWidth,
	onUpdateColumnMode,
	className,
}: EditorSidebarProps) => {
	return (
		<div className={`${className} editor-sidebar`}>
			<header className={'editor-header'}>
				<h1>Grid Playground</h1>
			</header>
			<ColumnEditor
				gridState={gridState}
				onAddColumn={onAddColumn}
				onDeleteColumn={onDeleteColumn}
				onUpdateColumnWidth={onUpdateColumnWidth}
				onUpdateColumnMode={onUpdateColumnMode}
			/>
			<GapEditor onGapChange={onGapChange} gridState={gridState} />
			<ContainerEditor
				onPaddingChange={onPaddingChange}
				gridState={gridState}
			/>
		</div>
	);
};
