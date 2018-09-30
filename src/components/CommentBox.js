import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

class CommentBox extends React.Component {
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

		this.props.saveComment(this.state.comment);
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

export default connect(
	null,
	actions
)(CommentBox);
