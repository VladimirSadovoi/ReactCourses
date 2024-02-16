import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onClick, name, type }) => {
	return (
		<button className='custom-button' type={type} onClick={onClick}>
			{name}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default Button;
