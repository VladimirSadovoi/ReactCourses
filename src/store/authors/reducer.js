import { ADD_AUTHOR, DELETE_AUTHOR, SAVE_AUTHORS } from './types';

export const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case SAVE_AUTHORS:
			return action.payload;

		case ADD_AUTHOR:
			return [...state, action.payload];

		case DELETE_AUTHOR:
			const authorIdToDelete = action.payload;
			return state.filter((author) => author.id !== authorIdToDelete);

		default:
			return state;
	}
};

export default authorsReducer;
