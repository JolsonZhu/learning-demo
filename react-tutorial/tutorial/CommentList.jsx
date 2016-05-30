import React from 'react';

import Comment from './Comment.jsx';

export default class CommentList extends React.Component {
	// getCommentNodes() {
	// 	let commentNodes = this.props.data.map((comment, key) => {
	// 		return (
	// 			<Comment author={comment.author} key={key}>
	// 				{comment.text}
	// 			</Comment>
	// 		);
	// 	});
	// }

	render() {
		let commentNodes = this.props.data.map((comment, key) => {
			return (
				<Comment author={comment.author} key={key}>
					{comment.text}
				</Comment>
			);
		});

		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
}