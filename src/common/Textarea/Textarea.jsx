import './Textarea.css';

const Textarea = ({
	label,
	id,
	placeholder,
	onChange,
	minLength,
	required,
}) => {
	return (
		<>
			{label && <label htmlFor={id}>{label}</label>}
			<textarea
				id={id}
				placeholder={placeholder}
				className='custom-textarea'
				onChange={onChange}
				minLength={minLength}
				required={required}
			/>
		</>
	);
};

export default Textarea;
