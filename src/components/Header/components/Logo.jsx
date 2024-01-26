import './Logo.css';
import logoImage from '../images/logo.png';

const Logo = () => {
	return (
		<div>
			<img src={logoImage} alt='Logo' />
		</div>
	);
};

export default Logo;
