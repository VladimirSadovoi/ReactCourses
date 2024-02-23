import PropTypes from 'prop-types';

import './Textarea.css';

const Textarea = ({
	label,
	id,
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
	placeholder: PropTypes.string,
	minLength: PropTypes.number,
	onChange: PropTypes.func,
	showError: PropTypes.bool,
};

export default Textarea;
