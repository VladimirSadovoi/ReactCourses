import './Header.css';

import Logo from './components/Logo';
import Button from '../../common/Button/Button';

import { buttonNames } from '../../constants';

const Header = () => {
	return (
		<header className='header-container'>
			<div className='logo-column'>
				<Logo />
			</div>
			<div className='user-info-column'>
				<span className='user-name'>User's name</span>
				<Button name={buttonNames.logoutButton} />
			</div>
		</header>
	);
};

export default Header;
