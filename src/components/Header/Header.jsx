import './Header.css';

import Logo from './components/Logo';
import Button from '../../common/Button/Button';

import { buttonNames, tokens } from '../../constants';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { deleteUserAction } from '../../store/user/actions';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user[0]);

	const handleLogoutButtonClick = () => {
		localStorage.removeItem(tokens.authToken);
		dispatch(deleteUserAction(user.email));
		navigate('/login');
	};

	return (
		<header className='header-container'>
			<div className='logo-column'>
				<Logo />
			</div>
			{user && user.isAuth && (
				<div className='user-info-column'>
					<span className='user-name'>{user.name}</span>
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
