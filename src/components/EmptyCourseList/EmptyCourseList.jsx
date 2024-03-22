import './EmptyCourseList.css';

import Button from '../../common/Button/Button';

import { buttonNames, labels } from '../../constants';
import { isAdmin } from '../../helpers/commonHelper';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmptyCourseList = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	return (
		<div className='empty-course-section'>
			<h3>{labels.emptyListLabel}</h3>
			<span>{labels.pleaseAddNewCourseLabel}</span>
			{isAdmin(user) ? (
				<Button
					name={buttonNames.addNewCourseButton}
					onClick={() => navigate('/courses/add')}
				/>
			) : (
				<p>{labels.noPermissionLabel}</p>
			)}
		</div>
	);
};

export default EmptyCourseList;
