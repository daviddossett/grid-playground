import React, { useState } from 'react';
import { Grid } from '../grid/Grid';
import { CodeSidebar } from '../code-sidebar/CodeSidebar';
import './App.css';
import { EditorSidebar } from '../editor-sidebar/EditorSidebar';

export interface IGridState {
	columnCount: number;
	columnGap: number;
	paddingTopBottom: number;
	paddingLeftRight: number;
	rowCount: number;
	rowGap: number;
}

const defaultGridState: IGridState = {
	columnCount: 4,
	columnGap: 20,
	paddingTopBottom: 32,
	paddingLeftRight: 32,
	rowCount: 1,
	rowGap: 20,
};

function App() {
	const [isCodeSidebarVisible, setIsCodeSidebarVisible] = useState(true);
	const [isEditorSidebarVisible, setIsEditorSidebarVisible] = useState(true);
	const [gridState, setGridState] = useState(defaultGridState);

	function toggleCodeSidebar() {
		setIsCodeSidebarVisible(!isCodeSidebarVisible);
	}

	function toggleEditorSidebar() {
		setIsEditorSidebarVisible(!isEditorSidebarVisible);
	}

	function handleInputChange(e: any) {
		const name = e.target.name;
		const value = e.target.value;
		setGridState({ ...gridState, [name]: value });
	}

	return (
		<div className={'app'}>
			{isEditorSidebarVisible && (
				<EditorSidebar
					className={'editor'}
					gridState={gridState}
					onInputChange={handleInputChange}
					onClose={toggleEditorSidebar}
				/>
			)}
			<Grid className={'grid'} grid={gridState} />
			{isCodeSidebarVisible && (
				<CodeSidebar
					className={'code'}
					gridState={gridState}
					onClose={toggleCodeSidebar}
				/>
			)}
		</div>
	);
}

export default App;
