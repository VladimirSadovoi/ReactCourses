import './Courses.css';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import EmptyCourseList from '../../components/EmptyCourseList/EmptyCourseList';

import { mockedCoursesList, buttonNames } from '../../constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
	const [filteredCourses, setFilteredCourses] = useState(mockedCoursesList);
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	const handleSearchButtonClick = () => {
		const filtered = mockedCoursesList.filter((course) =>
			course.title.toLowerCase().includes(searchText.toLowerCase())
		);

		if (filtered.length) {
			setFilteredCourses(filtered);
		} else {
			setFilteredCourses([]);
		}
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
