import './EmptyCourseList.css';

import Button from '../../common/Button/Button';

import { buttonNames, labels } from '../../constants';

import { useNavigate } from 'react-router-dom';

const EmptyCourseList = () => {
	const navigate = useNavigate();

	return (
		<div className='empty-course-section'>
			<h3>{labels.emptyListLabel}</h3>
			<span>{labels.pleaseAddNewCourseLabel}</span>
			<Button
				name={buttonNames.addNewCourseButton}
				onClick={() => navigate('/courses/add')}
			/>
		</div>
	);
};

export default EmptyCourseList;
