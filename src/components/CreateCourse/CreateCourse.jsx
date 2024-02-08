import './CreateCourse.css';

import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Button from '../../common/Button/Button';

import { buttonNames, placeholders } from '../../constants';

const CreateCourse = () => {
	return (
		<>
			<div className='create-course-container'>
				<h2>Create Page</h2>
				<div className='create-course-form'>
					<form>
						<div className='main-info-section'>
							<h3>Main Info</h3>
							<Input
								id='title-input'
								label='Title'
								type='text'
								placeholder={placeholders.inputText}
								minLength={2}
								// onChange={handleInputChange}
							/>
							<Textarea
								id='description-textarea'
								label='Description'
								placeholder={placeholders.inputText}
								minLength={2}
								// onChange={handleInputChange}
							/>
						</div>

						<div className='duration-section'>
							<h3>Duration</h3>
							<Input
								id='duration-input'
								label='Duration'
								type='number'
								placeholder={placeholders.inputText}
								// onChange={handleInputChange}
							/>
						</div>

						<div className='authors-section'>
							<h3>Authors</h3>
							<Input
								id='author-input'
								label='Author Name'
								type='text'
								placeholder={placeholders.inputText}
								minLength={2}
								// onChange={handleInputChange}
							/>
							<Button name={buttonNames.createAuthorButton} />

							<h3>Course Authors</h3>

							<h3>Authors List</h3>
						</div>
					</form>
					<div class='buttons-container'>
						<Button name={buttonNames.cancelButton} />
						<Button name={buttonNames.createCourseButton} />
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateCourse;
