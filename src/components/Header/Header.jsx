import './Header.css';

import Logo from './components/Logo';
import Button from '../../common/Button/Button';

import { buttonNames, tokens } from '../../constants';

import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const handleLogoutButtonClick = () => {
		localStorage.removeItem(tokens.authToken);
		navigate('/login');
	};

	const isAuthorized = localStorage.getItem(tokens.authToken);

	return (
		<header className='header-container'>
			<div className='logo-column'>
				<Logo />
			</div>
			{isAuthorized && (
				<div className='user-info-column'>
					<span className='user-name'>User's name</span>
					<Button
						name={buttonNames.logoutButton}
						onClick={handleLogoutButtonClick}
					/>
				</div>
			)}
		</header>
	);
};

export default Header;
