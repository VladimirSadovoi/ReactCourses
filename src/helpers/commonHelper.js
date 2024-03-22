const isAdmin = (user) => {
	return user && user.role === 'admin';
};

export { isAdmin };
