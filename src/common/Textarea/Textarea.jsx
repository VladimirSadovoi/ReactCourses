import PropTypes from 'prop-types';

import './Textarea.css';

const Textarea = ({
	label,
	id,
	value,
	placeholder,
	onChange,
	minLength,
	required,
	showError,
}) => {
	return (
		<>
			{label && <label htmlFor={id}>{label}</label>}
			<textarea
				id={id}
				value={value}
				placeholder={placeholder}
				className={`custom-textarea ${showError && required ? 'invalid' : ''}`}
				onChange={onChange}
				minLength={minLength}
			/>
			{showError && required && (
				<p className='error-message'>{label} is required</p>
			)}
		</>
	);
};

Textarea.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	minLength: PropTypes.number,
	onChange: PropTypes.func,
	showError: PropTypes.bool,
};

export default Textarea;
