import React, { useState } from 'react';
import { Grid } from '../grid/Grid';
import { CodeSidebar } from '../code-sidebar/CodeSidebar';
import './App.css';
import { EditorSidebar } from '../editor-sidebar/EditorSidebar';
import { Header } from '../header/Header';
import { useMediaQuery } from 'react-responsive';
import { breakpoint } from '../../styles/breakpoints';

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

export const App = () => {
	const [isCodeSidebarVisible, setIsCodeSidebarVisible] = useState(false);
	const [isEditorSidebarVisible, setIsEditorSidebarVisible] = useState(false);
	const [gridState, setGridState] = useState(defaultGridState);
	const isLargeScreen = useMediaQuery({ minWidth: breakpoint.large });

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
			{!isLargeScreen && (
				<Header
					className={'app-header-main'}
					onCodeButtonClick={toggleCodeSidebar}
					onEditorButtonClick={toggleEditorSidebar}
				/>
			)}
			{isLargeScreen && (
				<EditorSidebar
					gridState={gridState}
					onInputChange={handleInputChange}
				/>
			)}
			<Grid className={'grid'} grid={gridState} />
			{isLargeScreen && <CodeSidebar gridState={gridState} />}
		</div>
	);
};
