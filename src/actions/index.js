import axios from 'axios';

const API_KEY = '183632866b3293cebb95ba75aea8871b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	// Returns a promise:
	const request = axios.get(url);

	return {
		// Redux Promise halts the passing of the action to the reducers while the payload is still a promise. Once the promise is resolved, it re-starts the action > reducer process with the resolved request.
		type: FETCH_WEATHER,
		payload: request
	};
}