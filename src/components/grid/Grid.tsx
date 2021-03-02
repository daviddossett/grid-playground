import { TrackMode } from '../../templates/grid';
import { IGridState } from '../app/App.types';

interface IGridProps {
  className: string;
  gridState: IGridState;
}

export const Grid = ({ gridState, className }: IGridProps) => {
  const getTemplateColumns = () => {
    let templateColumns: any[] = [];
    gridState.columns.forEach((column) => {
      if (
        column.widthMode === TrackMode.em ||
        column.widthMode === TrackMode.fr ||
        column.widthMode === TrackMode.percent ||
        column.widthMode === TrackMode.px
      ) {
        templateColumns.push(`${column.widthValue}${column.widthMode}`);
      } else {
        templateColumns.push(`${column.widthMode}`);
      }
    });
    let formattedColumns = templateColumns.join(' ');
    return formattedColumns;
  };

  const templateColumns = getTemplateColumns();

  let gridStyles = {
    display: 'grid',
    maxWidth: '100vw',
    gridTemplateColumns: `${templateColumns}`,
    columnGap: `${gridState.columnGap}px`,
    padding: `${gridState.paddingTopBottom}px ${gridState.paddingLeftRight}px`,
    gridTemplateRows: `1fr`,
    rowGap: `${gridState.rowGap}px`,
  };

  const columnBackground = {
    background: 'rgba(250, 134, 134, 0.3)',
    border: '1px dashed #fa8686',
  };

  function generateColumns() {
    const columns = [];

    for (let j = 0; j < gridState.columns.length; j++) {
      columns.push(<div style={columnBackground} key={j} />);
    }
    return columns;
  }

  const columns = generateColumns();

  return (
    <main style={gridStyles} className={className}>
      {columns}
    </main>
  );
};
