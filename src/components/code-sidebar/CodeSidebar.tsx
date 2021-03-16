import React, { useLayoutEffect, useState } from 'react';
import './CodeSidebar.css';
import Prism from 'prismjs';
import '../../styles/prism.css';
import { IGridState, TrackMode } from '../app/App';

interface SidebarProps {
  gridState: IGridState;
  className?: string;
}

export const CodeSidebar = ({ gridState, className }: SidebarProps) => {
  const [buttonText, setButtonText] = useState('Copy');
  useLayoutEffect(() => {
    Prism.highlightAll();
  });

  const getTemplateColumns = () => {
    let templateColumns: any[] = [];
    gridState.columns.forEach((column) => {
      if (column.widthMode === TrackMode.minmax) {
        templateColumns.push(`${column.widthMode}(${column.widthValue})`);
      }
      if (
        column.widthMode === TrackMode.em ||
        column.widthMode === TrackMode.fr ||
        column.widthMode === TrackMode.percent ||
        column.widthMode === TrackMode.px
      ) {
        templateColumns.push(`${column.widthValue}${column.widthMode}`);
      }
    });
    let formattedColumns = templateColumns.join(' ');
    return formattedColumns;
  };

  const getTemplateRows = () => {
    let templateRows: any[] = [];
    gridState.rows.forEach((row) => {
      if (row.heightMode === TrackMode.minmax) {
        templateRows.push(`${row.heightMode}(${row.heightValue})`);
      }
      if (
        row.heightMode === TrackMode.em ||
        row.heightMode === TrackMode.fr ||
        row.heightMode === TrackMode.percent ||
        row.heightMode === TrackMode.px
      ) {
        templateRows.push(`${row.heightValue}${row.heightMode}`);
      }
    });
    let formattedRows = templateRows.join(' ');
    return formattedRows;
  };

  const templateColumns = getTemplateColumns();
  const templateRows = getTemplateRows();

  const codeSnippet = `.grid-container { 
  grid-template-columns: ${templateColumns};
  grid-template-rows: ${templateRows};
  grid-column-gap: ${gridState.columnGap}px;
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
    window.analytics.track('Copied the code', { gridState });
  }

  return (
    <div className={`${className} code-sidebar`}>
      <header className={'code-sidebar-header'}>
        <h2 className={'code-sidebar-title'}>CSS</h2>
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
