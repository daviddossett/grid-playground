import { IGridState } from '../app/App';
import { TextInput } from '../text-input/TextInput';
import '../header/Header.css';
import {
	columnGap,
	rowCount,
	rowGap,
	paddingTopBottom,
	paddingLeftRight,
	columnCount,
} from '../../icons/icons';

interface HeaderProps {
	gridState: IGridState;
	onInputChange: (e: any) => void;
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
						name={'columnCount'}
						label={'Column count'}
						value={props.gridState.columnCount}
						onChange={props.onInputChange}
						icon={columnCount}
					/>
					<TextInput
						type={'number'}
						name={'columnGap'}
						label={'Column gap'}
						value={props.gridState.columnGap}
						onChange={props.onInputChange}
						icon={columnGap}
					/>
				</div>
				<div className={'input-group'}>
					<TextInput
						type={'number'}
						name={'rowCount'}
						label={'Row count'}
						value={props.gridState.rowCount}
						onChange={props.onInputChange}
						icon={rowCount}
					/>
					<TextInput
						type={'number'}
						name={'rowGap'}
						label={'Row gap'}
						value={props.gridState.rowGap}
						onChange={props.onInputChange}
						icon={rowGap}
					/>
				</div>
				<div className={'input-group'}>
					<TextInput
						type={'number'}
						name={'paddingTopBottom'}
						label={'Padding Top and Bottom'}
						value={props.gridState.paddingTopBottom}
						onChange={props.onInputChange}
						icon={paddingTopBottom}
					/>
					<TextInput
						type={'number'}
						name={'paddingLeftRight'}
						label={'Padding Left and Right'}
						value={props.gridState.paddingLeftRight}
						onChange={props.onInputChange}
						icon={paddingLeftRight}
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
