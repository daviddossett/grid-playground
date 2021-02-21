import React, { useLayoutEffect } from 'react';
import { IGridState } from '../app/App';
import './CodeSidebar.css';
import Prism from 'prismjs';
import '../../styles/prism.css';

interface SidebarProps {
	gridState: IGridState;
	onClose?: () => void;
	className?: string;
}

export const CodeSidebar = ({
	gridState,
	onClose,
	className,
}: SidebarProps) => {
	useLayoutEffect(() => {
		Prism.highlightAll();
	});

	return (
		<div className={`${className} code-sidebar`}>
			<div className={'code-sidebar-content'}>
				<header className={'sidebar-header'}>
					<h2>Code</h2>
				</header>
				<pre>
					<code className={'language-css'}>{`/* CSS */`}</code>
					<br />
					<code className={'language-css'}>
						{`grid-template-columns: repeat(${gridState.columnCount}, 1fr);`}
					</code>
					<code className={'language-css'}>
						{`grid-column-gap: ${gridState.columnGap}px;`}
					</code>
					<code className={'language-css'}>
						{`grid-template-rows: repeat(${gridState.rowCount}, 1fr);`}
					</code>
					<code className={'language-css'}>
						{`grid-row-gap: ${gridState.rowGap}px;`}
					</code>
					<code className={'language-css'}>
						{`padding: ${gridState.paddingTopBottom}px ${gridState.paddingLeftRight}px;`}
					</code>
				</pre>
			</div>
		</div>
	);
};
