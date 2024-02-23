import { ADD_USER, DELETE_USER } from './types';

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const deleteUserAction = (payload) => ({
	type: DELETE_USER,
	payload,
});
