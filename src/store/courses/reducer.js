import { ADD_COURSE, DELETE_COURSE, SAVE_COURSES } from './types';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case SAVE_COURSES:
			return action.payload;

		case ADD_COURSE:
			return [...state, action.payload];

		case DELETE_COURSE:
			const courseIdToDelete = action.payload;
			return state.filter((course) => course.id !== courseIdToDelete);

		default:
			return state;
	}
};

export default coursesReducer;
