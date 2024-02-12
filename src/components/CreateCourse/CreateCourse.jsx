import './CreateCourse.css';

import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders, labels } from '../../constants';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import { formatDuration, formatDate } from '../../helpers/durationFormatter';
// import useRequests from '../../hooks/useAuth';

const CreateCourse = () => {
	const navigate = useNavigate();
	// const { performPostRequest } = useRequests();

	const [newCourse, setNewCourse] = useState({
		id: uuidv4(),
		title: '',
		description: '',
		creationDate: formatDate(new Date()),
		duration: 0,
		authors: [],
	});

	// const newCoursePayload = {
	// 	title: newCourse.title,
	// 	description: newCourse.description,
	// 	duration: newCourse.duration,
	// 	authors: newCourse.authors,
	// };

	const handleInputChange = (e) => {
		setNewCourse({
			...newCourse,
			[e.target.id]: e.target.value,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// try {
		// 	const result = await performPostRequest(
		// 		urls.createCourse,
		// 		newCoursePayload,
		// 		tokens.authToken
		// 	);
		// 	if (result.successful) {
		// 		navigate('/courses');
		// 	} else {
		// 		// add error handling
		// 	}
		// } catch (error) {
		// 	console.error('Login failed:', error.message);
		// }

		navigate('/courses');
	};

	return (
		<>
			<div className='create-course-container'>
				<h2>{labels.courseEditCreatePage}</h2>
				<div className='create-course-form'>
					<form id='create-course-form' onSubmit={handleFormSubmit}>
						<div className='main-info-section'>
							<h3>{labels.mainInfo}</h3>
							<Input
								id='title'
								label={labels.title}
								type='text'
								placeholder={placeholders.inputText}
								minLength={2}
								onChange={handleInputChange}
								required
							/>
							<Textarea
								id='description'
								label={labels.description}
								placeholder={placeholders.inputText}
								minLength={2}
								onChange={handleInputChange}
								required
							/>
						</div>

						<div className='duration-section'>
							<h3>{labels.duration}</h3>
							<Input
								id='duration'
								label={labels.duration}
								type='number'
								placeholder={placeholders.inputText}
								onChange={handleInputChange}
								required
							/>
							<p className='formatted-duration'>
								{formatDuration(newCourse.duration)}
							</p>
						</div>

						<div className='authors-section'>
							<h3>{labels.authors}</h3>
							<Input
								id='author-input'
								label={labels.authorName}
								type='text'
								placeholder={placeholders.inputText}
								minLength={2}
								//onChange={handleInputChange}
							/>
							<Button name={buttonNames.createAuthorButton} />

							<h3>{labels.courseAuthors}</h3>

							<h3>{labels.authorsList}</h3>
						</div>
						<div className='buttons-container'>
							<Button
								name={buttonNames.cancelButton}
								onClick={() => navigate('/courses')}
							/>
							<Button type='submit' name={buttonNames.createCourseButton} />
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateCourse;
