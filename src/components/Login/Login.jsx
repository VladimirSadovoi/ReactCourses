import './Login.css';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders } from '../../constants';

const Login = () => {
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
		navigate('/courses');
	};

	return (
		<>
			<div className='login-container'>
				<h2>Login</h2>
				<div className='login-form'>
					<form onSubmit={handleFormSubmit}>
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
						<Button type='submit' name={buttonNames.loginButton} />
					</form>
					<div className='link-to-register'>
						<p>If you don't have an account you may</p>
						<Link to='/registration'>Registration</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
