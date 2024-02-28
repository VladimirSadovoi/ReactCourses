import PropTypes from 'prop-types';

import './CourseCard.css';

import Button from '../../../../common/Button/Button';
import LabelValue from '../../../../common/LabelValue/LabelValue';

import { buttonNames, labels } from '../../../../constants';

import { formatDuration } from '../../../../helpers/durationFormatter';
import { findAuthorNames } from '../../../../helpers/courseDataHelper';
import { deleteCourseAction } from '../../../../store/courses/actions';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const CourseCard = ({ course }) => {
	const {
		id,
		title,
		description,
		authors: authorsIds,
		duration,
		creationDate,
	} = course;
	const allAuthors = useSelector((state) => state.authors);
	const dispatch = useDispatch();

	const deleteCourse = () => {
		dispatch(deleteCourseAction(id));
	};

	return (
		<div className='course-card'>
			<div className='title'>{title}</div>
			<div className='info'>
				<div className='first-column'>
					<div className='description'>{description}</div>
				</div>
				<div className='second-column'>
					<LabelValue
						label={labels.authors}
						value={findAuthorNames(allAuthors, authorsIds).join(', ')}
					/>
					<LabelValue
						label={labels.duration}
						value={formatDuration(duration)}
					/>
					<LabelValue label={labels.created} value={creationDate} />

					<div className='button-container'>
						<Link to={`/courses/${id}`}>
							<Button name={buttonNames.showCourseButton} />
						</Link>
						<Button
							name={buttonNames.deleteCourseButton}
							onClick={deleteCourse}
						/>
						<Button name={buttonNames.editCourseButton} />
					</div>
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	course: PropTypes.object,
};

export default CourseCard;
