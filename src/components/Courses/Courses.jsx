import './Courses.css';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import EmptyCourseList from '../../components/EmptyCourseList/EmptyCourseList';

import { buttonNames } from '../../constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMainContext } from '../../context/MainContext';

const Courses = () => {
	const { allCourses, filterCourses } = useMainContext();
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	const handleSearchButtonClick = () => {
		const filteredCourses = allCourses.filter((course) =>
			course.title.toLowerCase().includes(searchText.toLowerCase())
		);
		filterCourses(filteredCourses);
	};

	const shouldShowSearchBar = allCourses.length > 0;

	const courseDetailsContent = () => {
		if (!allCourses.length) {
			return <EmptyCourseList />;
		}

		return allCourses.map((course) => (
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
