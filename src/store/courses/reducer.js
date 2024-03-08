import {
	ADD_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
	SAVE_COURSES,
} from './types';

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

		case UPDATE_COURSE:
			const updatedCourse = action.payload;
			return state.map((course) =>
				course.id === updatedCourse.id ? updatedCourse : course
			);

		default:
			return state;
	}
};

export default coursesReducer;
