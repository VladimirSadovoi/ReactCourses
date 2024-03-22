import PropTypes from 'prop-types';

import './Input.css';

const Input = ({
	label,
	id,
	value,
	type,
	placeholder,
	minLength,
	required,
	onChange,
	showError,
}) => {
	return (
		<>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				value={value}
				type={type}
				placeholder={placeholder}
				className={`custom-input ${showError && required ? 'invalid' : ''}`}
				minLength={minLength > 0 ? minLength : null}
				onChange={onChange}
			/>
			{showError && required && (
				<p className='error-message'>{label} is required</p>
			)}
		</>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	minLength: PropTypes.number,
	onChange: PropTypes.func,
	showError: PropTypes.bool,
};

export default Input;
