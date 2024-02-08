import './LabelValue.css';

const LabelValue = ({ label, value }) => {
	return (
		<div className='label-value'>
			<p className='label'>{label}:</p>
			<p className='value'>{value}</p>
		</div>
	);
};

export default LabelValue;
