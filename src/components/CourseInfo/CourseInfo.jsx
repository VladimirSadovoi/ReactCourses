import './CourseInfo.css';

import { formatDuration } from '../../helpers/durationFormatter';
import { findAuthorNames } from '../../helpers/courseDataHelper';

import Button from '../../common/Button/Button';
import LabelValue from '../../common/LabelValue/LabelValue';

import { buttonNames, labels } from '../../constants';

import { useParams, useNavigate } from 'react-router-dom';
import { useMainContext } from '../../context/MainContext';

const CourseInfo = () => {
	const navigate = useNavigate();
	const { allCourses, allAuthors } = useMainContext();
	const { courseId } = useParams();

	const course = allCourses.find((course) => course.id === courseId);
	const {
		title,
		description,
		duration,
		creationDate,
		authors: authorsIds,
	} = course;

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
								value={findAuthorNames(allAuthors, authorsIds).join(', ')}
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
