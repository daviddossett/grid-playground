import React from 'react';
import { closeIcon } from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { Header } from '../header/Header';
import './EditorSidebar.css';

interface EditorSidebarProps {
	gridState: IGridState;
	onClose?: () => void;
	onInputChange: (e: any) => void;
	className?: string;
}

export const EditorSidebar = ({
	gridState,
	onClose,
	onInputChange,
	className,
}: EditorSidebarProps) => {
	return (
		<div className={`${className} editor-sidebar`}>
			<header className={'editor-header'}>
				<h1>Grid Playground</h1>
			</header>
			<EditorSection>
				<h2>Columns</h2>
			</EditorSection>
			<EditorSection>
				<h2>Rows</h2>
			</EditorSection>
			<EditorSection>
				<h2>Grid container</h2>
			</EditorSection>
		</div>
	);
};
