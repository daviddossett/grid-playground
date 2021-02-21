import React, { useLayoutEffect } from 'react';
import { IGridState } from '../app/App';
import './CodeSidebar.css';
import Prism from 'prismjs';
import '../../styles/prism.css';

interface SidebarProps {
	gridState: IGridState;
	className?: string;
	onClose?: () => void;
}

export const CodeSidebar = (props: SidebarProps) => {
	useLayoutEffect(() => {
		Prism.highlightAll();
	});

	return (
		<div className={`${props.className} code-sidebar`}>
			<div className={'code-sidebar-content'}>
				<header className={'sidebar-header'}>
					<h2>Code</h2>
				</header>
				<pre>
					<code className={'language-css'}>{`/* CSS */`}</code>
					<br />
					<code className={'language-css'}>
						{`grid-template-columns: repeat(${props.gridState.columnCount}, 1fr);`}
					</code>
					<code className={'language-css'}>
						{`grid-column-gap: ${props.gridState.columnGap}px;`}
					</code>
					<code className={'language-css'}>
						{`grid-template-rows: repeat(${props.gridState.rowCount}, 1fr);`}
					</code>
					<code className={'language-css'}>
						{`grid-row-gap: ${props.gridState.rowGap}px;`}
					</code>
					<code className={'language-css'}>
						{`padding: ${props.gridState.paddingTopBottom}px ${props.gridState.paddingLeftRight}px;`}
					</code>
				</pre>
			</div>
		</div>
	);
};
