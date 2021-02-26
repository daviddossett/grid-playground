import { subtract } from '../../icons/icons';
import '../input-group/InputGroup.css';

interface InputGroupProps {
	name?: string;
	value: number;
	id: string;
	onDelete: (e: any) => void;
}

function handleFocus(e: any) {
	e.target.select();
}

export const InputGroup = ({ name, value, onDelete, id }: InputGroupProps) => {
	return (
		<div className={'input-group-row'}>
			<input
				type={'number'}
				pattern={'[0-9]*'}
				name={name}
				value={value}
				onFocus={handleFocus}
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
