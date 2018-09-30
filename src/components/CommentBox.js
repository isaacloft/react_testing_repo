import React from 'react';

export default class CommentBox extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string,
	// };

	// constructor(props) {
	// 	super(props);
	// }

	state = { comment: '' };

	handleChange = event => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();

		// call action creator
		// and save the comment

		this.setState({ comment: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea
					value={this.state.comment}
					onChange={this.handleChange}
				/>
				<div>
					<button type="submit">Submit comment</button>
				</div>
			</form>
		);
	}
}
