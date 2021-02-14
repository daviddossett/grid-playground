import React from 'react';

interface TextInputProps {
  icon?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

function handleFocus(e: any) {
  e.target.select();
}

export const TextInput = (props: TextInputProps) => {
  return (
    <input type='text' value={props.value} onFocus={handleFocus} onChange={props.onChange} />
  )
}