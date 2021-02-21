import '../text-input/TextInput.css';

interface TextInputProps {
	label: string;
	type: string;
	onChange: (e: any) => void;
	icon: any;
	name: string;
	value: string | number;
}

function handleFocus(e: any) {
	e.target.select();
}

export const TextInput = ({
	label,
	type,
	onChange,
	icon,
	name,
	value,
}: TextInputProps) => {
	return (
		<>
			<label aria-label={label} htmlFor={label}>
				{label}
			</label>
			<div className={'input-with-icon'}>
				{icon}
				<input
					className={'input'}
					name={name}
					type={type}
					id={label}
					value={value}
					onFocus={handleFocus}
					onChange={onChange}
				/>
			</div>
		</>
	);
};
