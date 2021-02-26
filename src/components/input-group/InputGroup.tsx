interface InputGroupProps {
	label: string;
	name: string;
	value: number;
	placeholder?: string;
	onChange: (e: any) => void;
}

function handleFocus(e: any) {
	e.target.select();
}

export const InputGroup = ({
	label,
	name,
	value,
	placeholder,
	onChange,
}: InputGroupProps) => {
	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<input
				type={'number'}
				id={'label'}
				pattern={'[0-9]*'}
				name={name}
				value={value}
				// placeholder={placeholder}
				onChange={onChange}
				onFocus={handleFocus}
			/>
		</div>
	);
};
