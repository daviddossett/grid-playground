import { IColumn, IRow, IGridState } from '../components/app/App.types';

export enum TrackMode {
	fr = 'fr',
	px = 'px',
	percent = '%',
	em = 'em',
	auto = 'auto',
	minContent = 'min-content',
	maxContent = 'max-content',
	minmax = 'minmax',
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
	{
		id: '1',
		heightValue: 1,
		heightMode: TrackMode.fr,
	},
];

export const defaultGridState: IGridState = {
	columns: defaultColumns,
	rows: defaultRows,
	paddingTopBottom: 32,
	paddingLeftRight: 32,
	columnGap: 16,
	rowGap: 16,
};
