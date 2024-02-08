const formatNumber = (number) => (number < 10 ? `0${number}` : `${number}`);

const formatDuration = (minutes) => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	const formattedHours = formatNumber(hours);
	const formattedMinutes = formatNumber(remainingMinutes);

	const hoursLabel = hours === 1 ? 'hour' : 'hours';
	const durationString = `${formattedHours}:${formattedMinutes} ${hoursLabel}`;

	return durationString;
};

export { formatDuration };
