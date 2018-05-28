import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
	
		this.state = { term: '' };

		// Binding the context of onInputChange: this, which is our instance of SearchBar, has a function called onInputChange. Bind that function to this, which is SerachBar, and then replace onInputChange with this new bound instance of this function.
		this.onInputChange = this.onInputChange.bind(this);
	}

	// All dom event handlers like onChange, onClick, or onHover come with the event object
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	// This keeps the form element from doing it's natural submit behavior:
	onFormSubmit(event) {
		event.preventDefault();
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