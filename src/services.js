const performRequest = async (url, method, data, authToken = null) => {
	try {
		const headers = {
			'Content-Type': 'application/json',
		};

		if (authToken) {
			headers['Authorization'] = `Bearer ${authToken}`;
		}

		const response = await fetch(url, {
			method,
			body:
				method === 'POST' || method === 'PUT'
					? JSON.stringify(data)
					: undefined,
			headers,
		});

		const responseBody = await response.text();
		const result = responseBody ? JSON.parse(responseBody) : {};
		return result;
	} catch (error) {
		throw error;
	}
};

export const performGetRequest = async (url, authToken = null) => {
	return performRequest(url, 'GET', undefined, authToken);
};

export const performPostRequest = async (url, data, authToken = null) => {
	return performRequest(url, 'POST', data, authToken);
};

export const performDeleteRequest = async (url, authToken = null) => {
	return performRequest(url, 'DELETE', undefined, authToken);
};

export const performPutRequest = async (url, data, authToken = null) => {
	return performRequest(url, 'PUT', data, authToken);
};
