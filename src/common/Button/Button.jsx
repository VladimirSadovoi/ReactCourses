import './Button.css';

const Button = ({ onClick, name }) => {
	return (
		<button className='custom-button' onClick={onClick}>
			{name}
		</button>
	);
};

export default Button;
