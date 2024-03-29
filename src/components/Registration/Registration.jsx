import './Registration.css';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders, urls, labels } from '../../constants';
import { performPostRequest } from '../../services';

const Registration = () => {
	const navigate = useNavigate();

	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		password: false,
	});

	const isFormValid = () => {
		const newErrors = {
			name: newUser.name.trim() === '',
			email: newUser.email.trim() === '',
			password: newUser.password.trim() === '',
		};

		setErrors(newErrors);

		return !Object.values(newErrors).some((fieldError) => fieldError);
	};

	const handleInputChange = (e) => {
		setNewUser({
			...newUser,
			[e.target.id]: e.target.value,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (!isFormValid()) {
			return;
		}

		try {
			const result = await performPostRequest(urls.register, newUser);
			if (result.successful) {
				navigate('/login');
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
			console.error(labels.registrationFailedLabel, error.message);
			setError(error.message);
		}
	};

	return (
		<>
			<div className='registration-container'>
				<h2>{labels.registration}</h2>
				<div className='registration-form'>
					<form onSubmit={handleFormSubmit}>
						<Input
							id='name'
							label={labels.name}
							type='text'
							placeholder={placeholders.inputText}
							onChange={handleInputChange}
							required
							showError={errors.name}
						/>
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
						<Button type='submit' name={buttonNames.registerButton} />
					</form>
					<div className='link-to-login'>
						<p>If you have an account you may</p>
						<Link to='/login'>{labels.login}</Link>
					</div>
					{error && <div className='error-message'>{error}</div>}
				</div>
			</div>
		</>
	);
};

export default Registration;
