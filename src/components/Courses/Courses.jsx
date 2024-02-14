import './Courses.css';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import EmptyCourseList from '../../components/EmptyCourseList/EmptyCourseList';

import { mockedCoursesList, buttonNames } from '../../constants';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Courses = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const newCourse = location.state?.newCourse;

	if (newCourse && !courses.some((course) => course.id === newCourse.id)) {
		setCourses((prevCourses) => [...prevCourses, newCourse]);
	}

	const handleSearchButtonClick = () => {
		const filtered = mockedCoursesList.filter((course) =>
			course.title.toLowerCase().includes(searchText.toLowerCase())
		);

		if (filtered.length) {
			setCourses(filtered);
		} else {
			setCourses([]);
		}
	};

	const shouldShowSearchBar = courses.length > 0;

	const courseDetailsContent = () => {
		if (!courses.length) {
			return <EmptyCourseList />;
		}

		return courses.map((course) => (
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
