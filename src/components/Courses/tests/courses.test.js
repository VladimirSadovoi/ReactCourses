import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';

import coursesReducer from '../../../store/courses/reducer';
import authorsReducer from '../../../store/authors/reducer';
import userReducer from '../../../store/user/reducer';

import CourseForm from '../../CourseForm/CourseForm';
import Courses from '../Courses';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

const mockStore = configureStore({
	reducer: rootReducer,
});

const store = mockStore({
	user: {
		name: null,
		email: 'admin@email.com',
		password: 'admin123',
		role: 'admin',
		id: '85aa767d-73c0-4e23-9a02-27902d418b37',
	},
	courses: [
		{
			title: 'First course',
			description: 'First course description',
			duration: 120,
			authors: ['1c972c52-3198-4098-b6f7-799b45903199'],
			creationDate: '08/03/2024',
			id: 'ea2e956b-6699-4ef8-b27e-ffc64c64e2e2',
		},
		{
			title: 'Second course',
			description: 'Second course description',
			duration: 150,
			authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
			creationDate: '08/03/2024',
			id: 'ea2e956b-6699-4ef8-b27e-ffc64c64e2e3',
		},
	],
	authors: [
		{ name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
		{ name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
	],
});

const renderComponentForRoute = (path) => {
	return (
		<Provider store={store}>
			<MemoryRouter initialEntries={[path]}>
				<Routes>
					<Route path='/courses' element={<Courses />} />
					<Route path='/courses/add' element={<CourseForm mode='add' />} />
				</Routes>
			</MemoryRouter>
		</Provider>
	);
};

describe('Courses Component', () => {
	test('Courses should display amount of CourseCard equal to length of courses array', () => {
		render(renderComponentForRoute('/courses'));

		const courseCards = screen.getAllByTestId('course-card');
		expect(courseCards.length).toBe(2);
	});

	test('Courses should display CourseForm when "Add New Course" button is clicked', () => {
		render(renderComponentForRoute('/courses'));

		fireEvent.click(screen.getByText('Add new course'));
		expect(screen.getByTestId('course-form')).toBeInTheDocument();
	});
});
