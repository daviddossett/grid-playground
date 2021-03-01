import { TrackMode } from '../../templates/grid';

export interface IColumn {
	id: string;
	widthValue: number;
	widthMode: TrackMode;
}

export interface IRow {
	id: string;
	heightValue: number;
	heightMode: TrackMode;
}

export interface IGridState {
	columns: IColumn[];
	rows: IRow[];
	paddingTopBottom: number;
	paddingLeftRight: number;
	columnGap: number;
	rowGap: number;
}
