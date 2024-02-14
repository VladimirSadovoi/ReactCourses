import './CreateAuthor.css';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { buttonNames, placeholders, labels } from '../../../../constants';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const CreateAuthor = ({ addNewAuthor }) => {
	const [authorName, setAuthorName] = useState('');

	const handleInputChange = (event) => {
		setAuthorName(event.target.value);
	};

	const createAuthor = () => {
		if (authorName.trim() === '') {
			return;
		}

		const newAuthor = {
			id: uuidv4(),
			name: authorName,
		};

		addNewAuthor(newAuthor);
	};

	return (
		<div className='create-autor-item'>
			<Input
				id='author-input'
				label={labels.authorName}
				type='text'
				placeholder={placeholders.inputText}
				minLength={2}
				onChange={handleInputChange}
			/>
			<Button name={buttonNames.createAuthorButton} onClick={createAuthor} />
		</div>
	);
};

CreateAuthor.propTypes = {
	addNewAuthor: PropTypes.func,
};

export default CreateAuthor;