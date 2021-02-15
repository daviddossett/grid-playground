import '../text-input/TextInput.css';

interface TextInputProps {
  icon?: string;
  type: string
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
    <>
      <label aria-label={props.label} htmlFor={props.label}>{props.label}</label>
      <input type={props.type} id={props.label} value={props.value} onFocus={handleFocus} onChange={props.onChange} />
    </>
  )
}