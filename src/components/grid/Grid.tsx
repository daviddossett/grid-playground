import { IGridState } from '../app/App.types';

interface IGridProps {
	className: string;
	grid: IGridState;
}

export const Grid = (props: IGridProps) => {
	let gridStyles = {
		display: 'grid',
		maxWidth: '100vw',
		gridTemplateColumns: `repeat(2, 1fr)`,
		columnGap: `${props.grid.columnGap}px`,
		padding: `${props.grid.paddingTopBottom}px ${props.grid.paddingLeftRight}px`,
		gridTemplateRows: `repeat(2, 1fr)`,
		rowGap: `${props.grid.rowGap}px`,
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

	const columns = generateColumns(2, 2);

	return (
		<main style={gridStyles} className={props.className}>
			{columns}
		</main>
	);
};
