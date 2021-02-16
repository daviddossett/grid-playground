import '../text-input/TextInput.css';

interface TextInputProps {
	icon?: any;
	type: string;
	value?: string | number;
	placeholder?: string;
	label: string;
	onChange?: (e: any) => void;
}

function handleFocus(e: any) {
	e.target.select();
}

export const TextInput = (props: TextInputProps) => {
	return (
		<div className={'input-with-icon'}>
			<label aria-label={props.label} htmlFor={props.label}>
				{props.label}
			</label>
			{props.icon}
			<input
				className={'input'}
				type={props.type}
				id={props.label}
				value={props.value}
				onFocus={handleFocus}
				onChange={props.onChange}
			/>
		</div>
	);
};
