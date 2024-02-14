import './CreateCourse.css';

import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Button from '../../common/Button/Button';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AuthorItem from './components/AuthorItem/AuthorItem';

import {
	buttonNames,
	placeholders,
	labels,
	mockedAuthorsList,
} from '../../constants';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import { formatDuration, formatDate } from '../../helpers/durationFormatter';

const CreateCourse = () => {
	const navigate = useNavigate();

	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [newCourse, setNewCourse] = useState({
		id: uuidv4(),
		title: '',
		description: '',
		creationDate: formatDate(new Date()),
		duration: 0,
		authors: [],
	});

	const addNewAuthor = (author) => {
		setAuthors((prevAuthors) => [...prevAuthors, author]);
	};

	const onAddCourseAuthor = (authorId) => {
		const authorToAdd = authors.find((author) => author.id === authorId);
		const updatedAuthors = authors.filter((author) => author.id !== authorId);

		setAuthors(updatedAuthors);
		setCourseAuthors([...courseAuthors, authorToAdd]);
	};

	const onDeleteCourseAuthor = (authorId) => {
		const authorToDelete = courseAuthors.find(
			(author) => author.id === authorId
		);
		const updatedCourseAuthors = courseAuthors.filter(
			(author) => author.id !== authorId
		);

		setAuthors([...authors, authorToDelete]);
		setCourseAuthors(updatedCourseAuthors);
	};

	const handleInputChange = (e) => {
		setNewCourse({
			...newCourse,
			[e.target.id]:
				e.target.id === 'duration' ? Number(e.target.value) : e.target.value,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		navigate('/courses', { state: { newCourse } });
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
							<div>
								<h3>{labels.authors}</h3>
								<CreateAuthor addNewAuthor={addNewAuthor} />
							</div>
							<div className='authors'>
								<div className='authors-list-section'>
									<h3>{labels.authorsList}</h3>
									<div className='authors-list'>
										{authors.map((author) => (
											<AuthorItem
												id={author.id}
												name={author.name}
												showAddIcon={true}
												onAddClick={onAddCourseAuthor}
											/>
										))}
									</div>
								</div>
								<div className='course-authors-section'>
									<h3>{labels.courseAuthors}</h3>
									<div className='authors-list'>
										{courseAuthors.map((author) => (
											<AuthorItem
												id={author.id}
												name={author.name}
												showDeleteIcon={true}
												onDeleteClick={onDeleteCourseAuthor}
											/>
										))}
									</div>
								</div>
							</div>
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
