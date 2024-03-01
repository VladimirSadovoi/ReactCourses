import { LOGIN, LOGOUT } from './types';

export const loginAction = (payload) => ({ type: LOGIN, payload });
export const logoutAction = (payload) => ({
	type: LOGOUT,
	payload,
});
