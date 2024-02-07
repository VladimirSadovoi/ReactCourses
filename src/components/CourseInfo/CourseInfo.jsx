import './CourseInfo.css';

import { formatDuration } from '../../helpers/durationFormatter';
import { findAuthorNames } from '../../helpers/courseDataHelper';

const CourseInfo = ({ course }) => {
	return (
		<div className='course-info'>
			<h3 className='title'>{course.title}</h3>

			<div className='info'>
				<h4 className='description'>Description:</h4>
				<div className='columns'>
					<div className='first-column'>
						<div className='text'>{course.description}</div>
					</div>
					<div className='second-column'>
						<div className='pair'>
							<div className='label'>ID:</div>
							<div className='text'>{course.id}</div>
						</div>
						<div className='pair'>
							<div className='label'>Duration:</div>
							<div className='text'>{formatDuration(course.duration)}</div>
						</div>
						<div className='pair'>
							<div className='label'>Created:</div>
							<div className='text'>{course.creationDate}</div>
						</div>
						<div className='pair'>
							<div className='label'>Authors:</div>
							<div className='text'>
								{findAuthorNames(course.authors).join(', ')}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
