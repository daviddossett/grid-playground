import { IColumnsState } from "../app/App"

interface IGridProps {
  columns: IColumnsState;
  className: string;
}

export const Grid = (props: IGridProps) => {
  const gridStyles = {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: `repeat(${props.columns.count}, 1fr)`,
    gridColumnGap: `${props.columns.gutter}px`,
    padding: `0 ${props.columns.margin}px`
  }

  const columnBackground = { background: '#fa8686' };

  function generateColumns(columnCount: number) {
    const columns = [];
    for (let i = 0; i < columnCount; i++) {
      columns.push(<div style={columnBackground} />);
    };
    return columns;
  }

  const columns = generateColumns(props.columns.count);
  console.log(columns);

  return (
    <div style={gridStyles} className={props.className}>
      {columns}
    </div>
  )
}