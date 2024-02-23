import './CreateCourse.css';

import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Button from '../../common/Button/Button';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AuthorItem from './components/AuthorItem/AuthorItem';

import { buttonNames, placeholders, labels } from '../../constants';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../../context/MainContext';

import { formatDuration, formatDate } from '../../helpers/durationFormatter';

const CreateCourse = () => {
	const navigate = useNavigate();
	const { allAuthors, addNewCourse } = useMainContext();

	const [authorsList, setAuthorsList] = useState(allAuthors);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const [newCourse, setNewCourse] = useState({
		id: uuidv4(),
		title: '',
		description: '',
		creationDate: formatDate(new Date()),
		duration: 0,
		authors: [],
	});

	const onCreateNewAuthor = (author) => {
		setAuthorsList((prevAuthors) => [...prevAuthors, author]);
	};

	const onAddCourseAuthor = (authorId) => {
		const authorToAdd = allAuthors.find((author) => author.id === authorId);

		setCourseAuthors((prevAuthors) => [...prevAuthors, authorToAdd]);
		setAuthorsList((prevAuthors) =>
			prevAuthors.filter((author) => author.id !== authorId)
		);

		setNewCourse((prevCourse) => ({
			...prevCourse,
			authors: [...prevCourse.authors, authorId],
		}));
	};

	const onDeleteCourseAuthor = (authorId) => {
		const authorToDelete = courseAuthors.find(
			(author) => author.id === authorId
		);

		setCourseAuthors((prevAuthors) =>
			prevAuthors.filter((author) => author.id !== authorId)
		);
		setAuthorsList((prevAuthors) => [...prevAuthors, authorToDelete]);

		setNewCourse((prevCourse) => ({
			...prevCourse,
			authors: prevCourse.authors.filter((id) => id !== authorId),
		}));
	};

	const [errors, setErrors] = useState({
		title: false,
		description: false,
		duration: false,
	});

	const isFormValid = () => {
		const newErrors = {
			title: newCourse.title.trim() === '',
			description: newCourse.description.trim() === '',
			duration: newCourse.duration === 0,
		};

		setErrors(newErrors);

		return !Object.values(newErrors).some((fieldError) => fieldError);
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

		if (!isFormValid()) {
			return;
		}

		addNewCourse(newCourse);
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
								showError={errors.title}
							/>
							<Textarea
								id='description'
								label={labels.description}
								placeholder={placeholders.inputText}
								minLength={2}
								onChange={handleInputChange}
								required
								showError={errors.description}
							/>
						</div>

						<div className='duration-section'>
							<h3>{labels.duration}</h3>
							<div className='duration-info'>
								<div>
									<Input
										id='duration'
										label={labels.duration}
										type='number'
										placeholder={placeholders.inputText}
										onChange={handleInputChange}
										required
										showError={errors.duration}
									/>
								</div>
								<div className='formatted-duration-info'>
									<p className='formatted-duration'>
										{formatDuration(newCourse.duration)}
									</p>
								</div>
							</div>
						</div>

						<div className='authors-section'>
							<div>
								<h3>{labels.authors}</h3>
								<CreateAuthor onCreateNewAuthor={onCreateNewAuthor} />
							</div>
							<div className='authors'>
								<div className='authors-list-section'>
									<h3>{labels.authorsList}</h3>
									<div className='authors-list'>
										{authorsList.map((author) => (
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
