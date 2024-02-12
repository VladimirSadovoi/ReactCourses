import PropTypes from 'prop-types';

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

Input.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	minLength: PropTypes.number,
	onChange: PropTypes.func,
};

export default Input;
