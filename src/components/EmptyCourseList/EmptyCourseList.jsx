import './EmptyCourseList.css';

import Button from '../../common/Button/Button';

import { buttonNames, labels } from '../../constants';

const EmptyCourseList = () => {
	return (
		<div className='empty-course-section'>
			<h3>{labels.emptyListLabel}</h3>
			<span>{labels.pleaseAddNewCourseLabel}</span>
			<Button name={buttonNames.addNewCourseButton} />
		</div>
	);
};

export default EmptyCourseList;
