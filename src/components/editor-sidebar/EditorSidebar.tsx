import React from 'react';
import {
	columnCount,
	columnGap,
	rowCount,
	rowGap,
	paddingTopBottom,
	paddingLeftRight,
} from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { TextInput } from '../text-input/TextInput';
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
			<h1 className={'app-title'}>Grid Playground</h1>
			<EditorSection>
				<h2>Columns</h2>
			</EditorSection>
		</div>
	);
};
