import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isAdmin } from '../../helpers/commonHelper';

const PrivateRoute = ({ children }) => {
	const user = useSelector((state) => state.user);

	if (isAdmin(user)) {
		return <>{children}</>;
	}
	return <Navigate replace to='/courses' />;
};

export default PrivateRoute;
