import { IGridState } from '../app/App';
import { TextInput } from '../text-input/TextInput';
import '../header/Header.css';

interface HeaderProps {
	gridState: IGridState;
	onColumnCountChange: (e: any) => void;
	onColumnGapChange: (e: any) => void;
	onPaddingTopBottomChange: (e: any) => void;
	onPaddingLeftRightChange: (e: any) => void;
	onRowCountChange: (e: any) => void;
	onRowGapChange: (e: any) => void;
	onCodeButtonClick: () => void;
	toggleButtonText: string;
	toggleButtonIcon: any;
}

export const Header = (props: HeaderProps) => {
	return (
		<header className={'header'}>
			<h1>Grid Playground</h1>
			<div className={'input-groups-wrapper'}>
				<div className={'input-group'}>
					<TextInput
						type={'number'}
						label={'Column count'}
						value={props.gridState.columnCount}
						onChange={props.onColumnCountChange}
					/>
					<TextInput
						type={'number'}
						label={'Column gap'}
						value={props.gridState.columnGap}
						onChange={props.onColumnGapChange}
					/>
				</div>
				<div className={'input-group'}>
					<TextInput
						type={'number'}
						label={'Row count'}
						value={props.gridState.rowCount}
						onChange={props.onRowCountChange}
					/>
					<TextInput
						type={'number'}
						label={'Row gap'}
						value={props.gridState.rowGap}
						onChange={props.onRowGapChange}
					/>
				</div>
				<div className={'input-group'}>
					<TextInput
						type={'number'}
						label={'Padding Top and Bottom'}
						value={props.gridState.paddingTopBottom}
						onChange={props.onPaddingTopBottomChange}
					/>
					<TextInput
						type={'number'}
						label={'Padding Left and Right'}
						value={props.gridState.paddingLeftRight}
						onChange={props.onPaddingLeftRightChange}
					/>
				</div>
			</div>
			<button onClick={props.onCodeButtonClick}>
				{props.toggleButtonIcon}
				{props.toggleButtonText}
			</button>
		</header>
	);
};
