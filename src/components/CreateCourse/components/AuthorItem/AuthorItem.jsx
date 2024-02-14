import './AuthorItem.css';

import addIcon from '../icons/add.png';
import deleteIcon from '../icons/delete.png';

import PropTypes from 'prop-types';

const AuthorItem = ({
	id,
	name,
	showAddIcon,
	showDeleteIcon,
	onAddClick,
	onDeleteClick,
}) => {
	return (
		<div className='author-item'>
			<p>{name}</p>
			{showAddIcon && (
				<img
					src={addIcon}
					alt='Add author icon'
					onClick={() => onAddClick(id)}
				/>
			)}
			{showDeleteIcon && (
				<img
					src={deleteIcon}
					alt='Delete author icon'
					onClick={() => onDeleteClick(id)}
				/>
			)}
		</div>
	);
};

AuthorItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	showAddIcon: PropTypes.bool,
	showDeleteIcon: PropTypes.bool,
	onAddClick: PropTypes.func,
	onDeleteClick: PropTypes.func,
};

export default AuthorItem;
