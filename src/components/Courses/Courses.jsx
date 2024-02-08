import './Courses.css';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import CourseInfo from '../../components/CourseInfo/CourseInfo';
import EmptyCourseList from '../../components/EmptyCourseList/EmptyCourseList';

import { mockedCoursesList, buttonNames } from '../../constants';
import { useState } from 'react';

const Courses = () => {
	const [filteredCourses, setFilteredCourses] = useState(mockedCoursesList);
	const [selectedCourseId, setSelectedCourseId] = useState(null);
	const [searchText, setSearchText] = useState('');

	const handleShowCourseClick = (courseId) => {
		setSelectedCourseId(courseId);
	};

	const handleBackButtonClick = () => {
		setSelectedCourseId(null);
	};

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

	const shouldShowSearchBar =
		filteredCourses.length > 0 && selectedCourseId === null;

	const courseDetailsContent = () => {
		if (!filteredCourses.length && !selectedCourseId) {
			return <EmptyCourseList />;
		}

		if (selectedCourseId) {
			return (
				<CourseInfo
					course={filteredCourses.find(
						(course) => course.id === selectedCourseId
					)}
					onBackButtonClick={handleBackButtonClick}
				/>
			);
		}

		return filteredCourses.map((course) => (
			<div key={course.id}>
				<CourseCard
					course={course}
					onShowCourseClick={() => handleShowCourseClick(course.id)}
				/>
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
					<Button name={buttonNames.addNewCourseButton} />
				</div>
			)}

			<div className='course-details'>{courseDetailsContent()}</div>
		</div>
	);
};

export default Courses;
