import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
	
		this.state = { term: '' };

		// Binding the context of onInputChange: this, which is our instance of SearchBar, has a function called onInputChange. Bind that function to this, which is SerachBar, and then replace onInputChange with this new bound instance of this function.
		this.onInputChange = this.onInputChange.bind(this);
		// We need another context binding to avoid throwing an error:
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// All dom event handlers like onChange, onClick, or onHover come with the event object
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	// This keeps the form element from doing it's natural submit behavior:
	onFormSubmit(event) {
		event.preventDefault();

		// Now lets call the fetchWeather action creator with the search term the user entered:
		this.props.fetchWeather(this.state.term);
		// And clear the form for another user-entered term:
		this.setState({ term: '' });
	}

	render() {
		return (
			// When form elements are focused on a page, when the user hits enter, the browser will try to submit the form. To change this, we need to add an event handler to the form:
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five day forcast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit
					</button>
				</span>
			</form>
		);
	}
}

// Now we'll hook up our fetchWeather action creator to make sure that our action flows down through our middleware and into the reducers. By binding the action creator to dispatch and then mapping it to props, that gives us access to the function this.props.fetchWeather inside of our component:
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// The null argument tells Redux that we don't really care about state here in this container:
export default connect(null, mapDispatchToProps)(SearchBar);








