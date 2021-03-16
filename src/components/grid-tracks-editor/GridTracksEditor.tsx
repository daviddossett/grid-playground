import React from 'react';
import { add } from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { InputGroup } from '../input-group/InputGroup';
import './GridTracksEditor.css';

interface GridTracksEditorProps {
  gridState: IGridState;
  onAddColumn: () => void;
  onDeleteColumn: (e: any) => void;
  onUpdateColumn: (e: any) => void;
  onAddRow: () => void;
  onDeleteRow: (e: any) => void;
  onUpdateRow: (e: any) => void;
}

export const GridTracksEditor = ({
  gridState,
  onAddColumn,
  onDeleteColumn,
  onUpdateColumn,
  onAddRow,
  onDeleteRow,
  onUpdateRow,
}: GridTracksEditorProps) => {
  const getColumns = () => {
    let columns: JSX.Element[] = [];
    gridState.columns.forEach((column) => {
      columns.push(
        <InputGroup
          name={'Column'}
          value={column.widthValue}
          onDelete={onDeleteColumn}
          id={column.id}
          key={column.id}
          onUpdate={onUpdateColumn}
          mode={column.widthMode}
        />
      );
    });
    return <div className={'editor-group'}>{columns}</div>;
  };

  const getRows = () => {
    let rows: JSX.Element[] = [];
    gridState.rows.forEach((row) => {
      rows.push(
        <InputGroup
          name={'Row'}
          value={row.heightValue}
          onDelete={onDeleteRow}
          id={row.id}
          key={row.id}
          onUpdate={onUpdateRow}
          mode={row.heightMode}
        />
      );
    });
    return <div className={'editor-group'}>{rows}</div>;
  };

  const columns = getColumns();
  const rows = getRows();

  return (
    <>
      <EditorSection>
        <div className={'editor-section-header'}>
          <h2>Columns</h2>
          <button onClick={onAddColumn} className={'editor-section-add-button'}>
            {add}
          </button>
        </div>
        {columns}
      </EditorSection>
      <EditorSection>
        <div className={'editor-section-header'}>
          <h2>Rows</h2>
          <button onClick={onAddRow} className={'editor-section-add-button'}>
            {add}
          </button>
        </div>
        {rows}
      </EditorSection>
    </>
  );
};
