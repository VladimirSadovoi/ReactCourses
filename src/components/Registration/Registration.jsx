import './Registration.css';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders } from '../../constants';

const Registration = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleFormSubmit = () => {
		alert(
			'name:' +
				formData.name +
				',' +
				'email:' +
				formData.email +
				',' +
				'password:' +
				formData.password
		);

		// call api and if successfull
		navigate('/login');
	};

	return (
		<>
			<div className='registration-container'>
				<h2>Registration</h2>
				<div className='registration-form'>
					<form onSubmit={handleFormSubmit}>
						<Input
							id='name'
							label='Name'
							type='text'
							placeholder={placeholders.inputText}
							onChange={handleInputChange}
							required
						/>
						<Input
							id='email'
							label='Email'
							type='email'
							placeholder={placeholders.inputText}
							onChange={handleInputChange}
							required
						/>
						<Input
							id='password'
							label='Password'
							type='password'
							placeholder={placeholders.inputText}
							onChange={handleInputChange}
							required
						/>
						<Button type='submit' name={buttonNames.registerButton} />
					</form>
					<div className='link-to-login'>
						<p>If you have an account you may</p>
						<Link to='/login'>Login</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Registration;
