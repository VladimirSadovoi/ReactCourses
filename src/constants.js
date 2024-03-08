export const buttonNames = {
	loginButton: 'Login',
	logoutButton: 'Logout',
	registerButton: 'Register',
	addNewCourseButton: 'Add new course',
	backButton: 'Back',
	searchButton: 'Search',
	showCourseButton: 'Show course',
	cancelButton: 'Cancel',
	createCourseButton: 'Create course',
	createAuthorButton: 'Create author',
	updateCourseButton: 'Update course',
	deleteCourseButton: 'Delete',
	editCourseButton: 'Edit',
};

export const placeholders = {
	enterText: 'Enter your text',
	inputText: 'Input text',
};

export const labels = {
	emptyListLabel: 'Your list is empty',
	pleaseAddNewCourseLabel:
		"Please use 'Add new course' button to add your first course",
	unknownErrorLabel: 'An unknown error occurred. Please try again later.',
	loginFailedLabel: 'Login failed:',
	logoutFailedLabel: 'Logout failed:',
	registrationFailedLabel: 'Register failed:',
	getCoursesFailedLabel: 'Get courses failed:',
	getAuthorsFailedLabel: 'Get authors failed:',
	getUserFailedLabel: 'Get user failed:',
	createAuthorFailedLabel: 'Author creation failed:',
	createCourseFailedLabel: 'Course creation failed:',
	updateCourseFailedLabel: 'Update creation failed:',
	deleteCourseFailedLabel: 'Course delete failed:',
	courseEditCreatePage: 'Course Edit/Create Page',
	mainInfo: 'Main Info',
	login: 'Login',
	registration: 'Registration',
	id: 'ID',
	created: 'Created',
	name: 'Name',
	email: 'Email',
	password: 'Password',
	title: 'Title',
	description: 'Description',
	duration: 'Duration',
	authorName: 'Author Name',
	courseAuthors: 'Course Authors',
	authorsList: 'Authors List',
	authors: 'Authors',
	noPermissionLabel:
		"You don't have permissions to create a course. Please log in as ADMIN",
};

export const urls = {
	login: 'http://localhost:4000/login',
	logout: 'http://localhost:4000/logout',
	register: 'http://localhost:4000/register',
	courses: 'http://localhost:4000/courses/',
	getCurrentUser: 'http://localhost:4000/users/me',
	getCourses: 'http://localhost:4000/courses/all',
	getAuthors: 'http://localhost:4000/authors/all',
	createCourse: 'http://localhost:4000/courses/add',
	createAuthor: 'http://localhost:4000/authors/add',
};

export const tokens = {
	authToken: 'authToken',
};
