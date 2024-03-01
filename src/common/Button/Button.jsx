import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onClick, name, type, icon }) => {
	return (
		<button
			className={`custom-button ${icon ? 'with-icon' : ''}`}
			type={type}
			onClick={onClick}
		>
			{icon ? <img src={icon} alt={name} /> : name}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
	name: PropTypes.string,
	type: PropTypes.string,
	icon: PropTypes.string,
};

export default Button;
