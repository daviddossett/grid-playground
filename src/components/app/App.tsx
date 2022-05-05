import React, { useState } from 'react';
import { Grid } from '../grid/Grid';
import { CodeSidebar } from '../code-sidebar/CodeSidebar';
import './App.css';
import { EditorSidebar } from '../editor-sidebar/EditorSidebar';
import { Header } from '../header/Header';
import { useMediaQuery } from 'react-responsive';
import { breakpoint } from '../../styles/breakpoints';
import { GridTracksEditor } from '../grid-tracks-editor/GridTracksEditor';
import { ContainerEditor } from '../container-editor/ContainerEditor';
import { GapEditor } from '../gap-editor/GapEditor';

export enum TrackMode {
  fr = 'fr',
  px = 'px',
  minContent = 'min-content',
  maxContent = 'max-content',
  percent = '%',
  em = 'em',
  auto = 'auto',
  minmax = 'minmax',
}

export interface IRow {
  id: string;
  heightValue: number | string;
  heightMode: TrackMode;
}

export interface IColumn {
  id: string;
  widthValue: number | string;
  widthMode: TrackMode;
}

export interface IGridState {
  columns: IColumn[];
  rows: IRow[];
  paddingTopBottom: number;
  paddingLeftRight: number;
  columnId: string;
  columnGap: number;
  rowGap: number;
}

export const defaultColumns: IColumn[] = [
  {
    id: '0',
    widthValue: 1,
    widthMode: TrackMode.fr,
  },
  {
    id: '1',
    widthValue: 1,
    widthMode: TrackMode.fr,
  },
  {
    id: '2',
    widthValue: 1,
    widthMode: TrackMode.fr,
  },
  {
    id: '3',
    widthValue: 1,
    widthMode: TrackMode.fr,
  },
];

export const defaultRows: IRow[] = [
  {
    id: '0',
    heightValue: 1,
    heightMode: TrackMode.fr,
  },
];

export const defaultGridState: IGridState = {
  columns: defaultColumns,
  rows: defaultRows,
  paddingTopBottom: 24,
  paddingLeftRight: 24,
  columnGap: 16,
  rowGap: 16,
};

export const App = () => {
  const [isCodeSidebarVisible, setIsCodeSidebarVisible] = useState(false);
  const [isEditorSidebarVisible, setIsEditorSidebarVisible] = useState(false);
  const [gridState, setGridState] = useState(defaultGridState);
  const isLargeScreen = useMediaQuery({ minWidth: breakpoint.large });

  function toggleCodeSidebar() {
    setIsCodeSidebarVisible(!isCodeSidebarVisible);
    window.analytics.track('Toggled code sidebar');
  }

  function toggleEditorSidebar() {
    setIsEditorSidebarVisible(!isEditorSidebarVisible);
    window.analytics.track('Toggled editor sidebar');
  }

  function handleGapChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setGridState({ ...gridState, [name]: value });
    window.analytics.track('Gap changed', { gridState });
  }

  function handlePaddingChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setGridState({ ...gridState, [name]: value });
    window.analytics.track('Padding changed', { gridState });
  }

  function handleAddColumn() {
    const newColumn: IColumn = {
      id: (gridState.columns.length + 1).toString(),
      widthMode: TrackMode.fr,
      widthValue: 1,
    };
    setGridState({
      ...gridState,
      columns: [...gridState.columns, newColumn],
    });
    window.analytics.track('Add column', { gridState });
  }

  function handleAddRow() {
    const newRow: IRow = {
      id: (gridState.rows.length + 1).toString(),
      heightMode: TrackMode.fr,
      heightValue: 1,
    };
    setGridState({
      ...gridState,
      rows: [...gridState.rows, newRow],
    });
    window.analytics.track('Add row', { gridState });
  }

  function handleDeleteColumn(e: any) {
    const columnIdToDelete = e.currentTarget.id;

    const newColumns = gridState.columns.filter((column: IColumn) => column.id !== columnIdToDelete);
    setGridState({
      ...gridState,
      columns: newColumns,
    });
    window.analytics.track('Delete column', { gridState });
  }

  function handleDeleteRow(e: any) {
    const rowIdToDelete = e.currentTarget.id;

    const newRows = gridState.rows.filter((row: IRow) => row.id !== rowIdToDelete);
    setGridState({
      ...gridState,
      rows: newRows,
    });
    window.analytics.track('Delete row', { gridState });
  }

  function handleUpdateColumn(e: any) {
    const columnIdToUpdate = e.target.id;
    const newColumnValue = e.target.value;
    const tagName = e.target.tagName;

    const newColumns = gridState.columns.map((column) => {
      if (column.id === columnIdToUpdate && tagName === 'INPUT') {
        column.widthValue = newColumnValue;
      } else if (column.id === columnIdToUpdate && tagName === 'SELECT') {
        column.widthMode = newColumnValue;
        column.widthValue = '1';
        switch (column.widthMode) {
          case TrackMode.minmax:
            column.widthValue = '100px, 1fr';
            break;
          case TrackMode.px:
            column.widthValue = '100';
            break;
          case TrackMode.percent:
            column.widthValue = '10';
            break;
          default:
            column.widthValue = '1';
        }
      }
      return column;
    });
    setGridState({
      ...gridState,
      columns: newColumns,
    });
    window.analytics.track('Updated column', { gridState });
  }

  function handleUpdateRow(e: any) {
    const rowIdToUpdate = e.target.id;
    const newRowValue = e.target.value;
    const tagName = e.target.tagName;

    const newRows = gridState.rows.map((row) => {
      if (row.id === rowIdToUpdate && tagName === 'INPUT') {
        row.heightValue = newRowValue;
      } else if (row.id === rowIdToUpdate && tagName === 'SELECT') {
        row.heightMode = newRowValue;
        row.heightValue = '1';
        switch (row.heightMode) {
          case TrackMode.minmax:
            row.heightValue = '100px, 1fr';
            break;
          case TrackMode.px:
            row.heightValue = '100';
            break;
          case TrackMode.percent:
            row.heightValue = '10';
            break;
          default:
            row.heightValue = '1';
        }
      }
      return row;
    });
    setGridState({
      ...gridState,
      rows: newRows,
    });
    window.analytics.track('Updated row', { gridState });
  }

  const EditorWithOverlay = (
    <div className={'overlay-container'}>
      <EditorSidebar className={'overlay-editor'}>
        <GridTracksEditor
          gridState={gridState}
          onAddColumn={handleAddColumn}
          onDeleteColumn={handleDeleteColumn}
          onUpdateColumn={handleUpdateColumn}
          onAddRow={handleAddRow}
          onDeleteRow={handleDeleteRow}
          onUpdateRow={handleUpdateRow}
        />
        <GapEditor onGapChange={handleGapChange} gridState={gridState} />
        <ContainerEditor onPaddingChange={handlePaddingChange} gridState={gridState} />
      </EditorSidebar>
      <div className={'overlay'} onClick={toggleEditorSidebar} />
    </div>
  );

  const Editor = (
    <EditorSidebar className={'editor'}>
      <GridTracksEditor
        gridState={gridState}
        onAddColumn={handleAddColumn}
        onDeleteColumn={handleDeleteColumn}
        onUpdateColumn={handleUpdateColumn}
        onAddRow={handleAddRow}
        onDeleteRow={handleDeleteRow}
        onUpdateRow={handleUpdateRow}
      />
      <GapEditor onGapChange={handleGapChange} gridState={gridState} />
      <ContainerEditor onPaddingChange={handlePaddingChange} gridState={gridState} />
    </EditorSidebar>
  );

  const CodeWithOverlay = (
    <div className={'overlay-container'}>
      <CodeSidebar gridState={gridState} className={'overlay-code'} />
      <div className={'overlay'} onClick={toggleCodeSidebar} />
    </div>
  );

  const Code = <CodeSidebar gridState={gridState} className={'code'} />;

  return (
    <div className={'app'}>
      {!isLargeScreen && (
        <Header
          className={'app-header-main'}
          onCodeButtonClick={toggleCodeSidebar}
          onEditorButtonClick={toggleEditorSidebar}
        />
      )}
      {!isLargeScreen && isEditorSidebarVisible ? EditorWithOverlay : Editor}
      <Grid className={'grid'} gridState={gridState} />
      {!isLargeScreen && isCodeSidebarVisible ? CodeWithOverlay : Code}
    </div>
  );
};
