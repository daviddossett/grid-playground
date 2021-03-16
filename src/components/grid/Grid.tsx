import { IGridState, TrackMode } from '../app/App';

interface IGridProps {
  className: string;
  gridState: IGridState;
}

export const Grid = ({ gridState, className }: IGridProps) => {
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

  let gridStyles = {
    display: 'grid',
    maxWidth: '100vw',
    gridTemplateColumns: `${templateColumns}`,
    columnGap: `${gridState.columnGap}px`,
    padding: `${gridState.paddingTopBottom}px ${gridState.paddingLeftRight}px`,
    gridTemplateRows: `${templateRows}`,
    rowGap: `${gridState.rowGap}px`,
  };

  const columnBackground = {
    background: 'rgba(250, 134, 134, 0.3)',
    border: '1px dashed #fa8686',
  };

  function generateColumns(rowCount: number, columnCount: number) {
    const rows = [];

    for (let i = 0; i < rowCount; i++) {
      const columns = [];

      for (let j = 0; j < columnCount; j++) {
        columns.push(<div style={columnBackground} key={j} />);
      }
      rows.push(columns);
    }
    return rows;
  }

  const columns = generateColumns(
    gridState.rows.length,
    gridState.columns.length
  );

  return (
    <main style={gridStyles} className={className}>
      {columns}
    </main>
  );
};
