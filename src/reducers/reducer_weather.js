import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	// Switch statement handles only the fetchWeather action type:
	switch(action.type) {
		case FETCH_WEATHER:
			return [ action.payload.data ];
	}

	return state;
}