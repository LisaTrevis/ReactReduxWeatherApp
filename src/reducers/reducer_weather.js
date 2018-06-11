import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	// Switch statement handles only the fetchWeather action type:
	switch(action.type) {
		case FETCH_WEATHER:
			// May be tempted to do this:
			// return state.push(action.payload.data);
			// DON'T do this! It mutates state, which we DO NOT want to do!
			//Instead, we need to return a completely new instance of state, which concat does for us:
			// return state.concat([action.payload.data]);
			// And using ES6 syntax:
			return [ action.payload.data, ...state ]; // returns [ city, city, city ] NOT [ city, [ city, city ] ]
	}

	return state;
}