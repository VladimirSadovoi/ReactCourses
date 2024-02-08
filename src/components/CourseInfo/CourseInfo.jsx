import './CourseInfo.css';

import { formatDuration } from '../../helpers/durationFormatter';
import { findAuthorNames } from '../../helpers/courseDataHelper';

import Button from '../../common/Button/Button';
import LabelValue from '../../common/LabelValue/LabelValue';

import { buttonNames } from '../../constants';

const CourseInfo = ({ course, onBackButtonClick }) => {
	const { title, description, id, duration, creationDate, authors } = course;

	return (
		<>
			<div className='course-info'>
				<h3 className='title'>{title}</h3>

				<div className='info'>
					<h4 className='description'>Description:</h4>
					<div className='columns'>
						<div className='first-column'>
							<div className='text'>{description}</div>
						</div>
						<div className='second-column'>
							<LabelValue label='ID' value={id} />
							<LabelValue label='Duration' value={formatDuration(duration)} />
							<LabelValue label='Created' value={creationDate} />
							<LabelValue
								label='Authors'
								value={findAuthorNames(authors).join(', ')}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='back-button-container'>
				<Button name={buttonNames.backButton} onClick={onBackButtonClick} />
			</div>
		</>
	);
};

export default CourseInfo;
