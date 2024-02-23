import { ADD_USER, DELETE_USER } from './types';

export const userInitialState = [];

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return [...state, action.payload];

		case DELETE_USER:
			const userEmailToDelete = action.payload;
			return state.filter((user) => user.email !== userEmailToDelete);

		default:
			return state;
	}
};

export default userReducer;
