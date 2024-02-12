import './CourseInfo.css';

import { formatDuration } from '../../helpers/durationFormatter';
import { findAuthorNames } from '../../helpers/courseDataHelper';

import Button from '../../common/Button/Button';
import LabelValue from '../../common/LabelValue/LabelValue';

import { buttonNames, labels } from '../../constants';

import { useParams, useNavigate, useLocation } from 'react-router-dom';

const CourseInfo = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { course } = location.state || {};
	const { courseId } = useParams();

	const { title, description, duration, creationDate, authors } = course;

	return (
		<>
			<div className='course-info'>
				<h3 className='title'>{title}</h3>

				<div className='info'>
					<h4 className='description'>{labels.description}:</h4>
					<div className='columns'>
						<div className='first-column'>
							<div className='text'>{description}</div>
						</div>
						<div className='second-column'>
							<LabelValue label={labels.id} value={courseId} />
							<LabelValue
								label={labels.duration}
								value={formatDuration(duration)}
							/>
							<LabelValue label={labels.created} value={creationDate} />
							<LabelValue
								label={labels.authors}
								value={findAuthorNames(authors).join(', ')}
							/>
						</div>
					</div>
				</div>
				<div className='back-button-container'>
					<Button name={buttonNames.backButton} onClick={() => navigate(-1)} />
				</div>
			</div>
		</>
	);
};

export default CourseInfo;
