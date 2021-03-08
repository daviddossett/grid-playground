import React from 'react';
import { add } from '../../icons/icons';
import { IGridState } from '../app/App.types';
import { EditorSection } from '../editor-section/EditorSection';
import { InputGroup } from '../input-group/InputGroup';
import './ColumnEditor.css';

interface ColumnEditorProps {
  gridState: IGridState;
  onAddColumn: () => void;
  onDeleteColumn: (e: any) => void;
  onUpdateColumn: (e: any) => void;
}

export const ColumnEditor = ({
  gridState,
  onAddColumn,
  onDeleteColumn,
  onUpdateColumn,
}: ColumnEditorProps) => {
  const getColumns = () => {
    let columns: JSX.Element[] = [];
    gridState.columns.forEach((column) => {
      columns.push(
        <InputGroup
          name={'Column'}
          value={column.widthValue}
          onDeleteColumn={onDeleteColumn}
          id={column.id}
          key={column.id}
          onUpdateColumn={onUpdateColumn}
          mode={column.widthMode}
        />
      );
    });
    return <div className={'column-editor-group'}>{columns}</div>;
  };

  const columns = getColumns();

  return (
    <EditorSection>
      <div className={'editor-section-header'}>
        <h2>Columns</h2>
        <button onClick={onAddColumn} className={'editor-section-add-button'}>
          {add}
        </button>
      </div>
      {columns}
    </EditorSection>
  );
};
