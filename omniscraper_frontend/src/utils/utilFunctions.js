export const getStrippedVideoText = (text) => {
	const indexOfHttps = text ? text.indexOf('https') : -1;

	if (indexOfHttps > -1) {
		return text.slice(0, indexOfHttps).trim();
	}

	return null;
};

export const shareVideo = (slug) => {
	if (navigator.share) {
		navigator
			.share({
				url: slug,
			})
			.then(() => {
				// this.setState({ snackBarOpen: true, shareSuccessful: true });
				console.log('Thanks for sharing!');
			})
			.catch((err) => {
				// this.setState({ snackBarOpen: true, shareSuccessful: false });
				console.log(`Couldn't share url because of ${err.message}`);
			});
	} else {
		// this.setState({ snackBarOpen: true, shareSupported: false });
		console.log('Web share not supported!');
	}
};
