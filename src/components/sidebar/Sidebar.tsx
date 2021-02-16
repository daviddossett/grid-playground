import React from 'react';
import { IGridState } from '../app/App';

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
		</div>
	);
};
