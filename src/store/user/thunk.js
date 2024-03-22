import { addUserAction, logoutAction } from './actions';
import { performDeleteRequest, performGetRequest } from '../../services';
import { urls, labels } from '../../constants';

export const getCurrentUser = (token) => {
	return async (dispatch) => {
		try {
			const result = await performGetRequest(urls.getCurrentUser, token);
			if (result.successful) {
				const currentUser = {
					isAuth: true,
					name: result.result.name,
					email: result.result.email,
					token: token,
					role: result.result.role,
				};
				dispatch(addUserAction(currentUser));
			}
		} catch (error) {
			console.error(labels.getUserFailedLabel, error);
		}
	};
};

export const logoutUser = () => {
	return async (dispatch, getState) => {
		const { user } = getState();

		try {
			await performDeleteRequest(urls.logout, user.token);
			dispatch(logoutAction());
		} catch (error) {
			console.error(labels.logoutFailedLabel, error);
		}
	};
};
