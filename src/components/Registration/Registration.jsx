import './Registration.css';

import { Link } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders } from '../../constants';

const Registration = () => {
	return (
		<>
			<div className='registration-container'>
				<h2>Registration</h2>
				<div className='registration-form'>
					<form>
						<Input
							id='name-input'
							label='Name'
							type='text'
							placeholder={placeholders.inputText}
							// onChange={handleInputChange}
						/>
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
					<div class='link-to-login'>
						<p>If you have an account you may</p>
						<Link to='/login'>Login</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Registration;
