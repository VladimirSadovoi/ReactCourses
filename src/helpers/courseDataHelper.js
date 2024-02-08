import { mockedAuthorsList } from '../constants';

const findAuthorNames = (authorIds) => {
	return mockedAuthorsList
		.filter((author) => authorIds.includes(author.id))
		.map((author) => author.name);
};

export { findAuthorNames };
