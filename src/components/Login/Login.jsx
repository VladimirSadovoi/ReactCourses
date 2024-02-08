import './Login.css';

import { Link } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders } from '../../constants';

const Login = () => {
	return (
		<>
			<div className='login-container'>
				<h2>Login</h2>
				<div className='login-form'>
					<form>
						<Input
							id='email-input'
							label='Email'
							type='text'
							placeholder={placeholders.inputText}
							// onChange={handleInputChange}
						/>
						<Input
							id='password-input'
							label='Password'
							type='password'
							placeholder={placeholders.inputText}
							// onChange={handleInputChange}
						/>
						<Button name={buttonNames.registerButton} />
					</form>
					<div class='link-to-register'>
						<p>If you don't have an account you may</p>
						<Link to='/registration'>Registration</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
