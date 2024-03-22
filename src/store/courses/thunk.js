import {
	saveCoursesAction,
	addCourseAction,
	deleteCourseAction,
	updateCourseAction,
} from './actions';
import {
	performGetRequest,
	performPostRequest,
	performDeleteRequest,
	performPutRequest,
} from '../../services';
import { urls, labels } from '../../constants';

export const fetchCourses = () => {
	return async (dispatch) => {
		try {
			const result = await performGetRequest(urls.getCourses);
			if (result.successful) {
				dispatch(saveCoursesAction(result.result));
			}
		} catch (error) {
			console.error(labels.getCoursesFailedLabel, error.message);
		}
	};
};

export const createCourse = (course) => {
	return async (dispatch, getState) => {
		const { user } = getState();
		try {
			const result = await performPostRequest(
				urls.createCourse,
				course,
				user.token
			);
			if (result.successful) {
				dispatch(addCourseAction(result.result));
			}
		} catch (error) {
			console.error(labels.createCourseFailedLabel, error.message);
		}
	};
};

export const updateCourse = ({ courseId, course }) => {
	return async (dispatch, getState) => {
		const { user } = getState();
		try {
			const result = await performPutRequest(
				`${urls.courses}${courseId}`,
				course,
				user.token
			);
			if (result.successful) {
				dispatch(updateCourseAction(result.result));
			}
		} catch (error) {
			console.error(labels.updateCourseFailedLabel, error.message);
		}
	};
};

export const deleteCourse = (courseId) => {
	return async (dispatch, getState) => {
		const { user } = getState();
		try {
			const result = await performDeleteRequest(
				`${urls.courses}${courseId}`,
				user.token
			);
			if (result.successful) {
				dispatch(deleteCourseAction(courseId));
			}
		} catch (error) {
			console.error(labels.deleteCourseFailedLabel, error.message);
		}
	};
};
