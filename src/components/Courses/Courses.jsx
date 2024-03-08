import './Courses.css';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import EmptyCourseList from '../../components/EmptyCourseList/EmptyCourseList';

import { buttonNames, tokens } from '../../constants';
import { getCurrentUser } from '../../store/user/thunk';
import { fetchCourses } from '../../store/courses/thunk';
import { fetchAuthors } from '../../store/authors/thunk';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Courses = () => {
	const authToken = localStorage.getItem(tokens.authToken);
	const user = useSelector((state) => state.user);
	const allCourses = useSelector((state) => state.courses);
	const allAuthors = useSelector((state) => state.authors);
	const [filteredCourses, setFilteredCourses] = useState(allCourses);
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!user.email && authToken) {
			dispatch(getCurrentUser(authToken));
		}
		if (!allCourses.length) {
			dispatch(fetchCourses());
		}

		if (!allAuthors.length) {
			dispatch(fetchAuthors());
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	useEffect(() => {
		setFilteredCourses(allCourses);
	}, [allCourses]);

	const handleSearchButtonClick = () => {
		if (!searchText) {
			setFilteredCourses(allCourses);
			return;
		}

		const filteredCourses = allCourses.filter((course) =>
			course.title.toLowerCase().includes(searchText.toLowerCase())
		);
		setFilteredCourses(filteredCourses);
	};

	const shouldShowSearchBar = filteredCourses.length > 0;

	const courseDetailsContent = () => {
		if (!filteredCourses.length) {
			return <EmptyCourseList />;
		}

		return filteredCourses.map((course) => (
			<div key={course.id}>
				<CourseCard course={course} />
			</div>
		));
	};

	return (
		<div className='courses'>
			{shouldShowSearchBar && (
				<div className='search-bar'>
					<SearchBar
						setSearchText={setSearchText}
						onSearchButtonClick={handleSearchButtonClick}
					/>
					<Button
						name={buttonNames.addNewCourseButton}
						onClick={() => navigate('/courses/add')}
					/>
				</div>
			)}

			<div className='course-details'>{courseDetailsContent()}</div>
		</div>
	);
};

export default Courses;
