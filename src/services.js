const performPostRequest = async (url, data, authToken = null) => {
	try {
		const headers = {
			'Content-Type': 'application/json',
		};

		if (authToken) {
			headers['Authorization'] = `Bearer ${authToken}`;
		}

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers,
		});

		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
};

const performGetRequest = async (url, authToken = null) => {
	try {
		const headers = {
			'Content-Type': 'application/json',
		};

		if (authToken) {
			headers['Authorization'] = `Bearer ${authToken}`;
		}

		const response = await fetch(url, {
			method: 'GET',
			headers,
		});

		const result = await response.json();
		return result;
	} catch (error) {
		throw error;
	}
};

export { performPostRequest, performGetRequest };
