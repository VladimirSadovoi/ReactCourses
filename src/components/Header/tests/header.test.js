import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';

import coursesReducer from '../../../store/courses/reducer';
import authorsReducer from '../../../store/authors/reducer';
import userReducer from '../../../store/user/reducer';

import Header from '../Header';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

const mockStore = configureStore({
	reducer: rootReducer,
});

describe('Header Component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			user: {
				name: 'Test user',
				email: 'admin@email.com',
				password: 'admin123',
				role: 'admin',
				id: '85aa767d-73c0-4e23-9a02-27902d418b37',
				isAuth: true,
			},
		});
	});

	test('Header should have logo with Company Logo alt', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const logoElement = screen.getByAltText('Company Logo');
		expect(logoElement).toBeInTheDocument();
	});

	test('Header should show user name if isAuth is true', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const userNameElement = screen.getByText('Test user');
		expect(userNameElement).toBeInTheDocument();
	});

	test('Header should not show user name if isAuth is false', () => {
		store = mockStore({
			user: {
				name: 'Test user',
				email: 'admin@email.com',
				password: 'admin123',
				role: 'admin',
				id: '85aa767d-73c0-4e23-9a02-27902d418b37',
				isAuth: false,
			},
		});

		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const userNameElement = screen.queryByText('Test user');
		expect(userNameElement).not.toBeInTheDocument();
	});
});
