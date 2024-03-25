import './CourseForm.css';

import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import Button from '../../common/Button/Button';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AuthorItem from './components/AuthorItem/AuthorItem';

import { buttonNames, placeholders, labels } from '../../constants';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { createCourse, updateCourse } from '../../store/courses/thunk';
import { createAuthor } from '../../store/authors/thunk';
import { formatDuration } from '../../helpers/durationFormatter';

const CourseForm = ({ mode }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { courseId } = useParams();
	const allCourses = useSelector((state) => state.courses);
	const allAuthors = useSelector((state) => state.authors);

	const [authorsList, setAuthorsList] = useState(allAuthors);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const [course, setCourse] = useState({
		title: '',
		description: '',
		duration: 0,
		authors: [],
	});

	const onCreateNewAuthor = (author) => {
		dispatch(createAuthor(author));
	};

	useEffect(() => {
		setAuthorsList(allAuthors);
	}, [dispatch, allAuthors]);

	useEffect(() => {
		if (mode === 'update') {
			const courseToEdit = allCourses.find((course) => course.id === courseId);
			const updatedAuthorsList = courseToEdit.authors.map((authorId) =>
				allAuthors.find((author) => author.id === authorId)
			);

			setCourse({
				title: courseToEdit.title,
				description: courseToEdit.description,
				duration: courseToEdit.duration,
				authors: courseToEdit.authors,
			});

			setCourseAuthors(updatedAuthorsList);
		}
	}, [allAuthors, allCourses, courseId, mode]);

	const onAddCourseAuthor = (authorId) => {
		const authorToAdd = allAuthors.find((author) => author.id === authorId);

		setCourseAuthors((prevAuthors) => [...prevAuthors, authorToAdd]);
		setAuthorsList((prevAuthors) =>
			prevAuthors.filter((author) => author.id !== authorId)
		);

		setCourse((prevCourse) => ({
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

		setCourse((prevCourse) => ({
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
			title: course.title.trim() === '',
			description: course.description.trim() === '',
			duration: course.duration === 0,
		};

		setErrors(newErrors);

		return !Object.values(newErrors).some((fieldError) => fieldError);
	};

	const handleInputChange = (e) => {
		setCourse({
			...course,
			[e.target.id]:
				e.target.id === 'duration' ? Number(e.target.value) : e.target.value,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (!isFormValid()) {
			return;
		}

		const action = mode === 'update' ? updateCourse : createCourse;
		const payload = mode === 'update' ? { courseId, course } : course;
		dispatch(action(payload)).then(() => {
			navigate('/courses');
		});
	};

	return (
		<>
			<div className='create-course-container' data-testid='course-form'>
				<h2>{labels.courseEditCreatePage}</h2>
				<div className='create-course-form'>
					<form id='create-course-form' onSubmit={handleFormSubmit}>
						<div className='main-info-section'>
							<h3>{labels.mainInfo}</h3>
							<Input
								id='title'
								label={labels.title}
								value={course.title}
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
								value={course.description}
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
										value={course.duration}
										type='number'
										placeholder={placeholders.inputText}
										onChange={handleInputChange}
										required
										showError={errors.duration}
									/>
								</div>
								<div className='formatted-duration-info'>
									<p className='formatted-duration'>
										{formatDuration(course.duration)}
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
							<Button
								type='submit'
								name={
									mode === 'update'
										? buttonNames.updateCourseButton
										: buttonNames.createCourseButton
								}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CourseForm;
