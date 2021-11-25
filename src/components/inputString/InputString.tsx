import { ChangeEvent, FC, useState } from 'react';
import IInputString from './@InputString';
import styles from './InputString.module.scss';


const InputString: FC<IInputString> = ({
	name,
	defaultValue,
	label,
	placeholder,
	handleChange = () => {},
	className,
	...props
}) => {
	const [value, setValue] = useState(defaultValue ?? '');
	
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(newValue);
		handleChange(newValue);
	};
	
	const fieldsetClasses = [styles.fieldset];
	if (className) {
		fieldsetClasses.push(className);
	}
	
	return (
		<fieldset className={fieldsetClasses.join(' ')}>
			{!! label && <label htmlFor={name}>{label}</label>}
			
			<input
				id={name}
				name={name}
				type="text"
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={styles.input}
				{...props}
			/>
		</fieldset>
	);
};

export default InputString;
