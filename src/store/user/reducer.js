import { ADD_USER, LOGOUT } from './types';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				...action.payload,
			};

		case LOGOUT:
			return userInitialState;

		default:
			return state;
	}
};

export default userReducer;
