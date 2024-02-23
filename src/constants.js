export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		creationDate: '08/03/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

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
	registrationFailedLabel: 'Register failed:',
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
};

export const urls = {
	login: 'http://localhost:4000/login',
	register: 'http://localhost:4000/register',
	getCurrentUser: 'http://localhost:4000/users/me',
	createCourse: 'http://localhost:4000/courses/add',
};

export const tokens = {
	authToken: 'authToken',
};
