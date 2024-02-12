const formatNumber = (number) => (number < 10 ? `0${number}` : `${number}`);

const formatDuration = (minutes) => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	const formattedHours = formatNumber(hours);
	const formattedMinutes = formatNumber(remainingMinutes);

	const hoursLabel = hours <= 1 ? 'hour' : 'hours';
	const durationString = `${formattedHours}:${formattedMinutes} ${hoursLabel}`;

	return durationString;
};

const formatDate = (date) => {
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};

export { formatDuration, formatDate };
