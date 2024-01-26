import './CourseCard.css';

import Button from '../../../../common/Button/Button';

import { buttonNames } from '../../../../constants';

import { formatDuration } from '../../../../helpers/durationFormatter';
import { findAuthorNames } from '../../../../helpers/courseDataHelper';

const CourseCard = ({ course, onShowCourseClick }) => {
	return (
		<div className='course-card'>
			<div className='title'>{course.title}</div>
			<div className='info'>
				<div className='first-column'>
					<div className='description'>{course.description}</div>
				</div>
				<div className='second-column'>
					<div className='pair'>
						<div className='label'>Authors:</div>
						<div className='text'>
							{findAuthorNames(course.authors).join(', ')}
						</div>
					</div>
					<div className='pair'>
						<div className='label'>Duration:</div>
						<div className='text'>{formatDuration(course.duration)}</div>
					</div>
					<div className='pair'>
						<div className='label'>Created:</div>
						<div className='text'>{course.creationDate}</div>
					</div>
					<div className='button-container'>
						<Button
							name={buttonNames.showCourseButton}
							onClick={onShowCourseClick}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
