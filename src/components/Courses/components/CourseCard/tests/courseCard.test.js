import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';

import coursesReducer from '../../../../../store/courses/reducer';
import authorsReducer from '../../../../../store/authors/reducer';
import userReducer from '../../../../../store/user/reducer';

import CourseCard from '../CourseCard';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

const mockStore = configureStore({
	reducer: rootReducer,
});

describe('CourseCard Component', () => {
	let store;
	let mockCourse;

	beforeEach(() => {
		mockCourse = {
			title: 'First course',
			description: 'First course description',
			duration: 120,
			authors: [
				'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
				'1c972c52-3198-4098-b6f7-799b45903199',
			],
			creationDate: '08/03/2024',
			id: 'ea2e956b-6699-4ef8-b27e-ffc64c64e2e2',
		};

		store = mockStore({
			user: {
				name: null,
				email: 'admin@email.com',
				password: 'admin123',
				role: 'admin',
				id: '85aa767d-73c0-4e23-9a02-27902d418b37',
			},
			authors: [
				{ name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
				{ name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
			],
		});
	});

	test('CourseCard should display title', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard course={mockCourse} />
				</BrowserRouter>
			</Provider>
		);
		const titleElement = screen.getByText('First course');
		expect(titleElement).toBeInTheDocument();
	});

	test('CourseCard should display description', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard course={mockCourse} />
				</BrowserRouter>
			</Provider>
		);
		const descriptionElement = screen.getByText('First course description');
		expect(descriptionElement).toBeInTheDocument();
	});

	test('CourseCard should display duration in the correct format', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard course={mockCourse} />
				</BrowserRouter>
			</Provider>
		);
		const durationElement = screen.getByText('02:00 hours');
		expect(durationElement).toBeInTheDocument();
	});

	test('CourseCard should display authors list', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard course={mockCourse} />
				</BrowserRouter>
			</Provider>
		);
		const authorsElement = screen.getByText('author, author2');
		expect(authorsElement).toBeInTheDocument();
	});

	test('CourseCard should display created date in the correct format', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CourseCard course={mockCourse} />
				</BrowserRouter>
			</Provider>
		);
		const createdDateElement = screen.getByText('08/03/2024');
		expect(createdDateElement).toBeInTheDocument();
	});
});
