import React, { useState } from 'react';
import { Grid } from '../grid/Grid';
import { CodeSidebar } from '../code-sidebar/CodeSidebar';
import './App.css';
import { EditorSidebar } from '../editor-sidebar/EditorSidebar';
import { Header } from '../header/Header';
import { useMediaQuery } from 'react-responsive';
import { breakpoint } from '../../styles/breakpoints';
import { defaultGridState, TrackMode } from '../../templates/grid';
import { IColumn } from './App.types';

declare global {
	interface Window {
		analytics: any;
	}
}

export const App = () => {
	const [isCodeSidebarVisible, setIsCodeSidebarVisible] = useState(false);
	const [isEditorSidebarVisible, setIsEditorSidebarVisible] = useState(false);
	const [gridState, setGridState] = useState(defaultGridState);
	const isLargeScreen = useMediaQuery({ minWidth: breakpoint.large });

	function toggleCodeSidebar() {
		setIsCodeSidebarVisible(!isCodeSidebarVisible);
		window.analytics.track('Toggled code sidebar', { isCodeSidebarVisible });
	}

	function toggleEditorSidebar() {
		setIsEditorSidebarVisible(!isEditorSidebarVisible);
		window.analytics.track('Toggled editor sidebar', {
			isEditorSidebarVisible,
		});
	}

	function handleGapChange(e: any) {
		const name = e.target.name;
		const value = e.target.value;
		setGridState({ ...gridState, [name]: value });
	}

	function handlePaddingChange(e: any) {
		const name = e.target.name;
		const value = e.target.value;
		setGridState({ ...gridState, [name]: value });
	}

	function handleAddColumn() {
		const newColumn: IColumn = {
			id: (gridState.columns.length + 1).toString(),
			widthMode: TrackMode.fr,
			widthValue: 1,
		};
		setGridState({
			...gridState,
			columns: [...gridState.columns, newColumn],
		});
	}

	function handleDeleteColumn(e: any) {
		const columnIdToDelete = e.currentTarget.id;

		const newColumns = gridState.columns.filter(
			(column: IColumn) => column.id !== columnIdToDelete
		);
		setGridState({
			...gridState,
			columns: newColumns,
		});
	}

	function handleUpdateColumnWidth(e: any) {
		const columnIdToUpdate = e.target.id;
		const newColumnValue = e.target.value;

		const newColumns = gridState.columns.map((column) => {
			if (column.id === columnIdToUpdate) {
				column.widthValue = newColumnValue;
			}
			return column;
		});
		setGridState({
			...gridState,
			columns: newColumns,
		});
	}

	function handleUpdateColumnMode(e: any) {
		const columnIdToUpdate = e.target.id;
		const newColumnMode = e.currentTarget.value;
		console.log(newColumnMode);

		const newColumns = gridState.columns.map((column) => {
			if (column.id === columnIdToUpdate) {
				column.widthMode = newColumnMode;
			}
			return column;
		});
		setGridState({
			...gridState,
			columns: newColumns,
		});
	}

	const EditorWithOverlay = (
		<div className={'overlay-container'}>
			<EditorSidebar
				gridState={gridState}
				onAddColumn={handleAddColumn}
				onDeleteColumn={handleDeleteColumn}
				onGapChange={handleGapChange}
				onPaddingChange={handlePaddingChange}
				onUpdateColumnWidth={handleUpdateColumnWidth}
				onUpdateColumnMode={handleUpdateColumnMode}
				className={'overlay-editor'}
			/>
			<div className={'overlay'} onClick={toggleEditorSidebar} />
		</div>
	);

	const Editor = (
		<EditorSidebar
			gridState={gridState}
			onAddColumn={handleAddColumn}
			onDeleteColumn={handleDeleteColumn}
			onGapChange={handleGapChange}
			onPaddingChange={handlePaddingChange}
			onUpdateColumnWidth={handleUpdateColumnWidth}
			onUpdateColumnMode={handleUpdateColumnMode}
			className={'editor'}
		/>
	);

	const CodeWithOverlay = (
		<div className={'overlay-container'}>
			<CodeSidebar gridState={gridState} className={'overlay-code'} />
			<div className={'overlay'} onClick={toggleCodeSidebar} />
		</div>
	);

	const Code = <CodeSidebar gridState={gridState} className={'code'} />;

	return (
		<div className={'app'}>
			{!isLargeScreen && (
				<Header
					className={'app-header-main'}
					onCodeButtonClick={toggleCodeSidebar}
					onEditorButtonClick={toggleEditorSidebar}
				/>
			)}
			{!isLargeScreen && isEditorSidebarVisible ? EditorWithOverlay : Editor}
			<Grid className={'grid'} gridState={gridState} />
			{!isLargeScreen && isCodeSidebarVisible ? CodeWithOverlay : Code}
		</div>
	);
};
