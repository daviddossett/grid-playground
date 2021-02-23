import React, { useLayoutEffect, useState } from 'react';
import { IGridState } from '../app/App';
import './CodeSidebar.css';
import Prism from 'prismjs';
import '../../styles/prism.css';

interface SidebarProps {
	gridState: IGridState;
	className?: string;
}

export const CodeSidebar = ({ gridState, className }: SidebarProps) => {
	const [buttonText, setButtonText] = useState('Copy');
	useLayoutEffect(() => {
		Prism.highlightAll();
	});

	const codeSnippet = `.grid-container { 
  grid-template-columns: repeat(${gridState.columnCount}, 1fr);
  grid-column-gap: ${gridState.columnGap}px;
  grid-template-rows: repeat(${gridState.rowCount}, 1fr);
  grid-row-gap: ${gridState.rowGap}px;
  padding: ${gridState.paddingTopBottom}px ${gridState.paddingLeftRight}px; 
}`;

	function updateButtonText() {
		setButtonText('Copied');
		setTimeout(() => {
			setButtonText('Copy');
		}, 1500);
	}

	function handleCodeCopyClick() {
		updateButtonText();
		const el = document.createElement('textarea');
		el.value = codeSnippet;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}

	return (
		<div className={`${className} code-sidebar`}>
			<header className={'code-sidebar-header'}>
				<h2>CSS</h2>
				<button className={'copy-code-button'} onClick={handleCodeCopyClick}>
					{buttonText}
				</button>
			</header>
			<div className={'code-sidebar-content'}>
				<pre>
					<code className={'language-css'}>{codeSnippet}</code>
				</pre>
			</div>
		</div>
	);
};