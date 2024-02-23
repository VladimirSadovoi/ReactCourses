import './Header.css';

import Logo from './components/Logo';
import Button from '../../common/Button/Button';

import { buttonNames, urls, tokens } from '../../constants';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useRequests from '../../hooks/useAuth';

const Header = () => {
	const navigate = useNavigate();
	const { performGetRequest } = useRequests();
	const [user, setUser] = useState({});

	const handleLogoutButtonClick = () => {
		localStorage.removeItem(tokens.authToken);
		setUser({});
		navigate('/login');
	};

	const isAuthorized = localStorage.getItem(tokens.authToken);

	useEffect(() => {
		const getUser = async () => {
			try {
				const result = await performGetRequest(
					urls.getCurrentUser,
					isAuthorized
				);
				if (result.successful) {
					setUser(result.result);
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		if (isAuthorized && !user.name) {
			getUser();
		}
	}, [isAuthorized, user.name, navigate, performGetRequest]);

	return (
		<header className='header-container'>
			<div className='logo-column'>
				<Logo />
			</div>
			{isAuthorized && (
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
