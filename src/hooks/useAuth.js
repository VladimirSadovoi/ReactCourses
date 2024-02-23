const useRequests = () => {
	const performPostRequest = async (url, credentials, authToken = null) => {
		try {
			const headers = {
				'Content-Type': 'application/json',
			};

			if (authToken) {
				headers['Authorization'] = `Bearer ${authToken}`;
			}

			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(credentials),
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

	return { performPostRequest, performGetRequest };
};

export default useRequests;
