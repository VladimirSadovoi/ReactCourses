import PropTypes from 'prop-types';

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

Textarea.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	minLength: PropTypes.number,
	onChange: PropTypes.func,
};

export default Textarea;
