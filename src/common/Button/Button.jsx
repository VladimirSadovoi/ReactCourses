import './Button.css';

const Button = (params) => {
	return (
		<button className='custom-button' onClick={params.onClick}>
			{params.name}
		</button>
	);
};

export default Button;
