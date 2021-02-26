import React, { useState } from 'react';
import { Grid } from '../grid/Grid';
import { CodeSidebar } from '../code-sidebar/CodeSidebar';
import './App.css';
import { EditorSidebar } from '../editor-sidebar/EditorSidebar';
import { Header } from '../header/Header';
import { useMediaQuery } from 'react-responsive';
import { breakpoint } from '../../styles/breakpoints';

declare global {
	interface Window {
		analytics: any;
	}
}

enum TrackMode {
	fr = 'fr',
	px = 'px',
	percent = '%',
	em = 'em',
	auto = 'auto',
	minContent = 'min-content',
	maxContent = 'max-content',
	minmax = 'minmax',
}

interface IColumn {
	id: string;
	widthValue: number;
	widthMode: TrackMode;
}

interface IRow {
	id: string;
	heightValue: number;
	heightMode: TrackMode;
}

export interface IGridState {
	columns: IColumn[];
	rows: IRow[];
	paddingTopBottom: number;
	paddingLeftRight: number;
	columnGap: number;
	rowGap: number;
}

const defaultColumns: IColumn[] = [
	{
		id: '0',
		widthValue: 1,
		widthMode: TrackMode.fr,
	},
	{
		id: '1',
		widthValue: 2,
		widthMode: TrackMode.fr,
	},
	{
		id: '2',
		widthValue: 3,
		widthMode: TrackMode.fr,
	},
	{
		id: '3',
		widthValue: 4,
		widthMode: TrackMode.fr,
	},
];

const defaultRows: IRow[] = [
	{
		id: '0',
		heightValue: 1,
		heightMode: TrackMode.fr,
	},
	{
		id: '1',
		heightValue: 1,
		heightMode: TrackMode.fr,
	},
];

const defaultGridState: IGridState = {
	columns: defaultColumns,
	rows: defaultRows,
	paddingTopBottom: 32,
	paddingLeftRight: 32,
	columnGap: 16,
	rowGap: 16,
};

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
		const columnIdToDelete = e.target.id;
		// Create a new array of columns without the column containing the id above
		// Set the gridState's columns to that new array of columns
		// Profit
	}

	const EditorWithOverlay = (
		<div className={'overlay-container'}>
			<EditorSidebar
				gridState={gridState}
				onAddColumn={handleAddColumn}
				onDeleteColumn={handleDeleteColumn}
				onGapChange={handleGapChange}
				onPaddingChange={handlePaddingChange}
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
			<Grid className={'grid'} grid={gridState} />
			{!isLargeScreen && isCodeSidebarVisible ? CodeWithOverlay : Code}
		</div>
	);
};
