const formatDuration = (minutes) => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
	const formattedMinutes =
		remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;

	const hoursLabel = hours === 1 ? 'hour' : 'hours';
	const durationString = `${formattedHours}:${formattedMinutes} ${hoursLabel}`;

	return durationString;
};

export { formatDuration };
