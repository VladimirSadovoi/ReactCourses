import './Input.css';

const Input = ({
	label,
	id,
	type,
	placeholder,
	minLength,
	required,
	onChange,
}) => {
	return (
		<>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className='custom-input'
				minLength={minLength > 0 ? minLength : null}
				required={required}
				onChange={onChange}
			/>
		</>
	);
};

export default Input;
