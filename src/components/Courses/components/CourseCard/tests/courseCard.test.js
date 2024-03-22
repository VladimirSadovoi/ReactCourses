import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import CourseCard from '../CourseCard';

describe('CourseCard Component', () => {
	const mockCourse = {
		id: '123',
		title: 'Test Course',
		description: 'Test Description',
		authors: ['Author1', 'Author2'],
		duration: 120,
		creationDate: '2022-03-22',
	};

	test('CourseCard should display title', () => {
		const store = configureStore({
			reducer: {},
			preloadedState: {
				user: {},
				authors: [],
			},
		});

		render(
			<Provider store={store}>
				<CourseCard course={mockCourse} />
			</Provider>
		);

		const titleElement = screen.getByText('Test Course');
		expect(titleElement).toBeInTheDocument();

		screen.debug();
	});

	// test('CourseCard should display description', () => {
	// 	render(<CourseCard course={mockCourse} />);
	// 	const descriptionElement = screen.getByText('Test Description');
	// 	expect(descriptionElement).toBeInTheDocument();
	// });

	// test('CourseCard should display duration in the correct format', () => {
	// 	render(<CourseCard course={mockCourse} />);
	// 	const durationElement = screen.getByText('2 hours');
	// 	expect(durationElement).toBeInTheDocument();
	// });

	// test('CourseCard should display authors list', () => {
	// 	render(<CourseCard course={mockCourse} />);
	// 	const authorsElement = screen.getByText('Author1, Author2');
	// 	expect(authorsElement).toBeInTheDocument();
	// });

	// test('CourseCard should display created date in the correct format', () => {
	// 	render(<CourseCard course={mockCourse} />);
	// 	const createdDateElement = screen.getByText('Mar 22, 2022');
	// 	expect(createdDateElement).toBeInTheDocument();
	// });
});
