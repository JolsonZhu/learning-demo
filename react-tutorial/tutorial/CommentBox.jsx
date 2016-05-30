import React from 'react';
import ReactDOM from 'react-dom';

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import data from './data.js';

class CommentBox extends React.Component {
	getInitialState() {
		return {data: []};
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
		);
	}
};

ReactDOM.render(
	<CommentBox data={data} />,
	document.getElementById('content')
);