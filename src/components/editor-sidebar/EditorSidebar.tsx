import React from 'react';
import { IGridState } from '../app/App.types';
import { ColumnEditor } from '../column-editor/ColumnEditor';
import { ContainerEditor } from '../container-editor/ContainerEditor';
import { GapEditor } from '../gap-editor/GapEditor';
import './EditorSidebar.css';

interface EditorSidebarProps {
	children: any;
	className?: string;
}

export const EditorSidebar = ({ className, children }: EditorSidebarProps) => {
	return (
		<div className={`${className} editor-sidebar`}>
			<header className={'editor-header'}>
				<h1>Grid Playground</h1>
			</header>
			{children}
		</div>
	);
};
