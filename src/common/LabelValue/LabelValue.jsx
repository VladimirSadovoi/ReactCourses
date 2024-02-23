import PropTypes from 'prop-types';

import './LabelValue.css';

const LabelValue = ({ label, value }) => {
	return (
		<div className='label-value'>
			<p className='label'>{label}:</p>
			<p className='value'>{value}</p>
		</div>
	);
};

LabelValue.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default LabelValue;
