import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { buttonNames, placeholders } from '../../../../constants';

const SearchBar = ({ onSearchButtonClick, setSearchText }) => {
	const handleInputChange = (event) => {
		setSearchText(event.target.value);
	};

	return (
		<>
			<div>
				<Input
					id='search-input'
					type='text'
					placeholder={placeholders.enterText}
					onChange={handleInputChange}
				/>
				<Button name={buttonNames.searchButton} onClick={onSearchButtonClick} />
			</div>
		</>
	);
};

export default SearchBar;
