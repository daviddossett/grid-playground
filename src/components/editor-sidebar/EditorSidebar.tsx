import React from 'react';
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
	function handleAddColumnPress() {
		alert('Clicked add column');
	}

	function handleAddRowPress() {
		alert('Clicked add row');
	}

	function handleDeleteColumnPress() {
		alert('Clicked delete column');
	}

	function handleDeleteRowPress() {
		alert('Clicked delete row');
	}

	return (
		<div className={`${className} editor-sidebar`}>
			<header className={'editor-header'}>
				<h1>Grid Playground</h1>
			</header>
			<DimensionEditor
				onAddButtonPress={handleAddColumnPress}
				onDeleteButtonPress={handleDeleteColumnPress}
				title={'Columns'}
			/>
			<DimensionEditor
				onAddButtonPress={handleAddRowPress}
				onDeleteButtonPress={handleDeleteRowPress}
				title={'Rows'}
			/>
			<ContainerEditor onInputChange={onInputChange} gridState={gridState} />
		</div>
	);
};
