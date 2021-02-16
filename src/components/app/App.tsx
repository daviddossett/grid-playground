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
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
	>
		<path
			d="M17.9953 12.0001C17.9954 11.7239 17.7716 11.5 17.4955 11.4999L12.7105 11.4981L14.3564 9.85233C14.5516 9.65707 14.5516 9.34049 14.3564 9.14523C14.1611 8.94996 13.8445 8.94996 13.6492 9.14523L11.15 11.6445C10.9547 11.8397 10.9547 12.1563 11.15 12.3516L13.6492 14.8508C13.8445 15.0461 14.1611 15.0461 14.3564 14.8508C14.5516 14.6556 14.5516 14.339 14.3564 14.1437L12.7108 12.4981L17.4951 12.4999C17.7712 12.5 17.9952 12.2762 17.9953 12.0001Z"
			fill="#1e1e1e"
		/>
		<path
			d="M4.75 20.0017C3.23122 20.0017 2 18.7705 2 17.2517L2 6.74805C2 5.22927 3.23122 3.99805 4.75 3.99805H19.25C20.7688 3.99805 22 5.22926 22 6.74805V17.2517C22 18.7705 20.7688 20.0017 19.25 20.0017L4.75 20.0017ZM3.5 17.2517C3.5 17.9421 4.05964 18.5017 4.75 18.5017H8.00415L8.00415 5.49805L4.75 5.49805C4.05964 5.49805 3.5 6.05769 3.5 6.74805L3.5 17.2517ZM9.50415 5.49805L9.50415 18.5017L19.25 18.5017C19.9404 18.5017 20.5 17.9421 20.5 17.2517L20.5 6.74805C20.5 6.05769 19.9404 5.49805 19.25 5.49805L9.50415 5.49805Z"
			fill="#1e1e1e"
		/>
	</svg>
);

const closeIcon = (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6.00473 12.0001C6.00463 11.7239 6.22841 11.5 6.50455 11.4999L11.2895 11.4981L9.64365 9.85233C9.44839 9.65707 9.44839 9.34049 9.64365 9.14523C9.83891 8.94996 10.1555 8.94996 10.3508 9.14523L12.85 11.6445C13.0453 11.8397 13.0453 12.1563 12.85 12.3516L10.3508 14.8508C10.1555 15.0461 9.83891 15.0461 9.64365 14.8508C9.44839 14.6556 9.44839 14.339 9.64365 14.1437L11.2892 12.4981L6.50492 12.4999C6.22877 12.5 6.00483 12.2762 6.00473 12.0001Z"
			fill="#1e1e1e"
		/>
		<path
			d="M19.25 20.0017C20.7688 20.0017 22 18.7705 22 17.2517L22 6.74805C22 5.22927 20.7688 3.99805 19.25 3.99805H4.75C3.23122 3.99805 2 5.22926 2 6.74805V17.2517C2 18.7705 3.23122 20.0017 4.75 20.0017L19.25 20.0017ZM20.5 17.2517C20.5 17.9421 19.9404 18.5017 19.25 18.5017H15.9958L15.9959 5.49805L19.25 5.49805C19.9404 5.49805 20.5 6.05769 20.5 6.74805L20.5 17.2517ZM14.4959 5.49805L14.4958 18.5017L4.75 18.5017C4.05964 18.5017 3.5 17.9421 3.5 17.2517L3.5 6.74805C3.5 6.05769 4.05965 5.49805 4.75 5.49805L14.4959 5.49805Z"
			fill="#1e1e1e"
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
