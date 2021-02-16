import React from 'react';
import { IGridState } from '../app/App';
import '../sidebar/Sidebar.css';

interface SidebarProps {
	onClose?: () => void;
	gridState: IGridState;
}

export const Sidebar = (props: SidebarProps) => {
	const gridState = props.gridState;
	console.log(gridState);
	return (
		<div className={'sidebar'}>
			<button className={'close-button'} onClick={props.onClose}>
				Close
			</button>
			<div className={'sidebar-content'}>
				<p className={'coming-soon-placeholder'}>Coming soon!</p>
			</div>
		</div>
	);
};
