import { ADD_USER, LOGOUT } from './types';

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const logoutAction = (payload) => ({
	type: LOGOUT,
	payload,
});
