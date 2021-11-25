import { InputHTMLAttributes } from 'react';


interface IInputString extends InputHTMLAttributes<HTMLInputElement> {
	name: string,
	label?: string;
	defaultValue?: string;
	handleChange?: (value: string) => void
}

export default IInputString;
