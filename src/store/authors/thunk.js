import { saveAuthorAction, addAuthorAction } from './actions';
import { performGetRequest, performPostRequest } from '../../services';
import { urls, labels } from '../../constants';

export const fetchAuthors = () => {
	return async (dispatch) => {
		try {
			const result = await performGetRequest(urls.getAuthors);
			if (result.successful) {
				dispatch(saveAuthorAction(result.result));
			}
		} catch (error) {
			console.error(labels.getAuthorsFailedLabel, error.message);
		}
	};
};

export const createAuthor = (author) => {
	return async (dispatch, getState) => {
		const { user } = getState();
		try {
			const result = await performPostRequest(
				urls.createAuthor,
				author,
				user.token
			);
			if (result.successful) {
				dispatch(addAuthorAction(result.result));
			}
		} catch (error) {
			console.error(labels.createAuthorFailedLabel, error.message);
		}
	};
};
