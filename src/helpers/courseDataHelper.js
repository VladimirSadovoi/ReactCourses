import { mockedAuthorsList } from '../constants';

const findAuthorNames = (authorIds) => {
	return authorIds.map((authorId) => {
		const author = mockedAuthorsList.find((author) => author.id === authorId);
		return author ? author.name : 'Unknown Author';
	});
};

export { findAuthorNames };
