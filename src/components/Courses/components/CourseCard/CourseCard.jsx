import './CourseCard.css';

import Button from '../../../../common/Button/Button';
import LabelValue from '../../../../common/LabelValue/LabelValue';

import { buttonNames } from '../../../../constants';

import { formatDuration } from '../../../../helpers/durationFormatter';
import { findAuthorNames } from '../../../../helpers/courseDataHelper';

const CourseCard = ({ course, onShowCourseClick }) => {
	const { title, description, authors, duration, creationDate } = course;

	return (
		<div className='course-card'>
			<div className='title'>{title}</div>
			<div className='info'>
				<div className='first-column'>
					<div className='description'>{description}</div>
				</div>
				<div className='second-column'>
					<LabelValue
						label='Authors'
						value={findAuthorNames(authors).join(', ')}
					/>
					<LabelValue label='Duration' value={formatDuration(duration)} />
					<LabelValue label='Created' value={creationDate} />

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
