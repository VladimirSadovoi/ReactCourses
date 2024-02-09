import './CreateCourse.css';

import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders } from '../../constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatDuration } from '../../helpers/durationFormatter';

const CreateCourse = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		id: '', //string
		title: '', //string
		description: '', //string,
		creationDate: '', //string,
		duration: '', //number,
		authors: [], //[authorId]
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleFormSubmit = () => {
		alert(
			'title:' +
				formData.title +
				',' +
				'description:' +
				formData.description +
				',' +
				'duration:' +
				formData.duration
		);

		// call api and if successfull
		navigate('/courses');
	};

	return (
		<>
			<div className='create-course-container'>
				<h2>Course Edit/Create Page</h2>
				<div className='create-course-form'>
					<form id='create-course-form' onSubmit={handleFormSubmit}>
						<div className='main-info-section'>
							<h3>Main Info</h3>
							<Input
								id='title'
								label='Title'
								type='text'
								placeholder={placeholders.inputText}
								minLength={2}
								onChange={handleInputChange}
								required
							/>
							<Textarea
								id='description'
								label='Description'
								placeholder={placeholders.inputText}
								minLength={2}
								onChange={handleInputChange}
								required
							/>
						</div>

						<div className='duration-section'>
							<h3>Duration</h3>
							<Input
								id='duration'
								label='Duration'
								type='number'
								placeholder={placeholders.inputText}
								onChange={handleInputChange}
								required
							/>
							<p className='formatted-duration'>
								{formatDuration(formData.duration)}
							</p>
						</div>

						<div className='authors-section'>
							<h3>Authors</h3>
							<Input
								id='author-input'
								label='Author Name'
								type='text'
								placeholder={placeholders.inputText}
								minLength={2}
								//onChange={handleInputChange}
							/>
							<Button name={buttonNames.createAuthorButton} />

							<h3>Course Authors</h3>

							<h3>Authors List</h3>
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
