import { LOGIN, LOGOUT } from './types';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGIN:
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
