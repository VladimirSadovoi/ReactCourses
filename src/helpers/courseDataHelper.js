const findAuthorNames = (authors, authorIds) => {
	return authors
		.filter((author) => authorIds.includes(author.id))
		.map((author) => author.name);
};

export { findAuthorNames };
