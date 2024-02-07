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

	const handleInputChange = (event) => {
		setSearchText(event.target.value);
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

	return (
		<div className='courses'>
			{shouldShowSearchBar && (
				<div className='search-bar'>
					<SearchBar
						handleInputChange={handleInputChange}
						onSearchButtonClick={handleSearchButtonClick}
					/>
					<Button name={buttonNames.addNewCourseButton} />
				</div>
			)}

			<div className='course-details'>
				{selectedCourseId ? (
					<>
						<CourseInfo
							course={filteredCourses.find(
								(course) => course.id === selectedCourseId
							)}
						/>
						<div className='back-button-container'>
							<Button
								name={buttonNames.backButton}
								onClick={handleBackButtonClick}
							/>
						</div>
					</>
				) : filteredCourses.length ? (
					filteredCourses.map((course) => (
						<div key={course.id}>
							<CourseCard
								course={course}
								onShowCourseClick={() => handleShowCourseClick(course.id)}
							/>
						</div>
					))
				) : (
					<EmptyCourseList />
				)}
			</div>
		</div>
	);
};

export default Courses;
