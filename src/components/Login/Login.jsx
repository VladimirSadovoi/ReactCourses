import './Login.css';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { loginAction } from '../../store/user/actions';
import {
	buttonNames,
	placeholders,
	urls,
	tokens,
	labels,
} from '../../constants';
import { performPostRequest } from '../../services';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	const [errors, setErrors] = useState({
		email: false,
		password: false,
	});

	const isFormValid = () => {
		const newErrors = {
			email: user.email.trim() === '',
			password: user.password.trim() === '',
		};

		setErrors(newErrors);

		return !Object.values(newErrors).some((fieldError) => fieldError);
	};

	const handleInputChange = (e) => {
		setUser({
			...user,
			[e.target.id]: e.target.value,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (!isFormValid()) {
			return;
		}

		try {
			const result = await performPostRequest(urls.login, user);
			if (result.successful) {
				const newUser = {
					isAuth: true,
					name: result.user.name,
					email: result.user.email,
					token: result.result.substring(7),
				};

				localStorage.setItem(tokens.authToken, result.result.substring(7));
				dispatch(loginAction(newUser));
				navigate('/courses');
			} else {
				if (result.errors && result.errors.length > 0) {
					setError(result.errors[0]);
				} else if (result.result) {
					setError(result.result);
				} else {
					setError(labels.unknownErrorLabel);
				}
			}
		} catch (error) {
			console.error(labels.loginFailedLabel, error.message);
			setError(error.message);
		}
	};

	return (
		<>
			<div className='login-container'>
				<h2>{labels.login}</h2>
				<div className='login-form'>
					<form onSubmit={handleFormSubmit}>
						<Input
							id='email'
							label={labels.email}
							type='email'
							placeholder={placeholders.inputText}
							onChange={handleInputChange}
							required
							showError={errors.email}
						/>
						<Input
							id='password'
							label={labels.password}
							type='password'
							placeholder={placeholders.inputText}
							onChange={handleInputChange}
							required
							showError={errors.password}
						/>
						<Button type='submit' name={buttonNames.loginButton} />
					</form>
					<div className='link-to-register'>
						<p>If you don't have an account you may</p>
						<Link to='/registration'>{labels.registration}</Link>
					</div>
					{error && <div className='error-message'>{error}</div>}
				</div>
			</div>
		</>
	);
};

export default Login;
