import React, { useState } from 'react';
import { Grid } from '../grid/Grid';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import './App.css';

export interface IGridState {
	columnCount: number;
	columnGap: number;
	paddingTopBottom: number;
	paddingLeftRight: number;
	rowCount: number;
	rowGap: number;
}

const defaultGridState: IGridState = {
	columnCount: 12,
	columnGap: 20,
	paddingTopBottom: 32,
	paddingLeftRight: 32,
	rowCount: 1,
	rowGap: 20,
};

const openIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M19.25 4C20.7688 4 22 5.23122 22 6.75V17.25C22 18.7688 20.7688 20 19.25 20H4.75C3.23122 20 2 18.7688 2 17.25V6.75C2 5.23122 3.23122 4 4.75 4H19.25ZM20.5 6.75C20.5 6.05964 19.9404 5.5 19.25 5.5H15.9957V18.5H19.25C19.9404 18.5 20.5 17.9404 20.5 17.25V6.75ZM14.4957 18.5V5.5H4.75C4.05964 5.5 3.5 6.05964 3.5 6.75V17.25C3.5 17.9404 4.05964 18.5 4.75 18.5H14.4957Z"
			fill="#212121"
		/>
	</svg>
);

const closeIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6.00473 12.0001C6.00463 11.7239 6.22841 11.5 6.50455 11.4999L11.2895 11.4981L9.64365 9.85233C9.44839 9.65707 9.44839 9.34049 9.64365 9.14523C9.83891 8.94996 10.1555 8.94996 10.3508 9.14523L12.85 11.6445C13.0453 11.8397 13.0453 12.1563 12.85 12.3516L10.3508 14.8508C10.1555 15.0461 9.83891 15.0461 9.64365 14.8508C9.44839 14.6556 9.44839 14.339 9.64365 14.1437L11.2892 12.4981L6.50492 12.4999C6.22877 12.5 6.00483 12.2762 6.00473 12.0001Z"
			fill="#212121"
		/>
		<path
			d="M19.25 20.0017C20.7688 20.0017 22 18.7705 22 17.2517L22 6.74805C22 5.22927 20.7688 3.99805 19.25 3.99805H4.75C3.23122 3.99805 2 5.22926 2 6.74805V17.2517C2 18.7705 3.23122 20.0017 4.75 20.0017L19.25 20.0017ZM20.5 17.2517C20.5 17.9421 19.9404 18.5017 19.25 18.5017H15.9958L15.9959 5.49805L19.25 5.49805C19.9404 5.49805 20.5 6.05769 20.5 6.74805L20.5 17.2517ZM14.4959 5.49805L14.4958 18.5017L4.75 18.5017C4.05964 18.5017 3.5 17.9421 3.5 17.2517L3.5 6.74805C3.5 6.05769 4.05965 5.49805 4.75 5.49805L14.4959 5.49805Z"
			fill="#212121"
		/>
	</svg>
);

function App() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const [sidebarToggleText, setSidebarToggleText] = useState('View code');
	const [gridState, setGridState] = useState(defaultGridState);
	const [sidebarToggleIcon, setSidebarToggleIcon] = useState(openIcon);

	function toggleSidebar() {
		setIsSidebarVisible(!isSidebarVisible);
		setSidebarToggleText(
			sidebarToggleText === 'View code' ? 'Hide code' : 'View code'
		);
		setSidebarToggleIcon(sidebarToggleIcon === openIcon ? closeIcon : openIcon);
	}

	function handleColumnCountChange(e: any) {
		setGridState({ ...gridState, columnCount: e.target.value });
	}

	function handleColumnGutterChange(e: any) {
		setGridState({ ...gridState, columnGap: e.target.value });
	}

	function handleRowCountChange(e: any) {
		setGridState({ ...gridState, rowCount: e.target.value });
	}

	function handleRowGapChange(e: any) {
		setGridState({ ...gridState, rowGap: e.target.value });
	}

	function handlePaddingTopBottomChange(e: any) {
		setGridState({ ...gridState, paddingTopBottom: e.target.value });
	}

	function handlePaddingLeftRightChange(e: any) {
		setGridState({ ...gridState, paddingLeftRight: e.target.value });
	}

	return (
		<div className={'app'}>
			<Header
				gridState={gridState}
				onColumnCountChange={handleColumnCountChange}
				onColumnGapChange={handleColumnGutterChange}
				onPaddingTopBottomChange={handlePaddingTopBottomChange}
				onPaddingLeftRightChange={handlePaddingLeftRightChange}
				onRowCountChange={handleRowCountChange}
				onRowGapChange={handleRowGapChange}
				onCodeButtonClick={toggleSidebar}
				toggleButtonText={sidebarToggleText}
				toggleButtonIcon={sidebarToggleIcon}
			/>
			<Grid className={'main'} grid={gridState} />
			{isSidebarVisible && (
				<Sidebar gridState={gridState} onClose={toggleSidebar} />
			)}
		</div>
	);
}

export default App;
