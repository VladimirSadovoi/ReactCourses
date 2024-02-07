import './SearchBar.css';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { buttonNames, placeholders } from '../../../../constants';

const SearchBar = ({ handleInputChange, onSearchButtonClick }) => {
	return (
		<div>
			<Input
				placeholder={placeholders.enterText}
				onChange={handleInputChange}
			/>
			<Button name={buttonNames.searchButton} onClick={onSearchButtonClick} />
		</div>
	);
};

export default SearchBar;
