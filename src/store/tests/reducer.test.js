import { coursesReducer, coursesInitialState } from '../courses/reducer';
import { saveCoursesAction } from '../courses/actions';

describe('Courses Reducer', () => {
	test('Return the initial state', () => {
		const initialState = coursesInitialState;
		const action = { type: 'UNKNOWN_ACTION' };

		const newState = coursesReducer(initialState, action);
		expect(newState).toEqual(initialState);
	});

	test('Handle SAVE_COURSE and return new state after saving course', () => {
		const initialState = coursesInitialState;
		const newCourse = { id: 1, name: 'Course 1' };
		const saveCourseAction = saveCoursesAction([newCourse]);

		const newState = coursesReducer(initialState, saveCourseAction);

		expect(newState).toEqual([...initialState, newCourse]);
	});
});
