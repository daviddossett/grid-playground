import { subtract } from '../../icons/icons';
import '../input-group/InputGroup.css';

interface InputGroupProps {
	name?: string;
	value: number;
	mode: string;
	id: string;
	onDelete: (e: any) => void;
	onUpdateValue: (e: any) => void;
}

function handleFocus(e: any) {
	e.target.select();
}

export const InputGroup = ({
	name,
	value,
	mode,
	onDelete,
	onUpdateValue,
	id,
}: InputGroupProps) => {
	return (
		<div className={'input-group-row'}>
			<input
				type={'number'}
				pattern={'[0-9]*'}
				name={name}
				value={value}
				onFocus={handleFocus}
				onChange={onUpdateValue}
				id={id}
			/>
			<button
				onClick={onDelete}
				id={id}
				className={'editor-section-add-button'}
			>
				{subtract}
			</button>
		</div>
	);
};
