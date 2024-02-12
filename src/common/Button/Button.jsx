import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onClick, name }) => {
	return (
		<button className='custom-button' onClick={onClick}>
			{name}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	name: PropTypes.string.isRequired,
};

export default Button;
