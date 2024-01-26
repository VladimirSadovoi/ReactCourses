import './Input.css';

const Input = ({ placeholder, onChange }) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className='custom-input'
			onChange={onChange}
		/>
	);
};

export default Input;
