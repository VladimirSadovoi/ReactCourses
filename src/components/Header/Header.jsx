import './Header.css';

import Logo from './components/Logo';
import Button from '../../common/Button/Button';

import { buttonNames } from '../../constants';

const Header = () => {
	return (
		<header className='header-container'>
			<div className='first-column'>
				<Logo />
			</div>
			<div className='second-column'>
				<span className='custom-span'>User's name</span>
				<Button name={buttonNames.logoutButton} />
			</div>
		</header>
	);
};

export default Header;
