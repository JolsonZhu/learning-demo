import React from 'react';

export default class SearchBar extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	handleChange() {
		this.props.onUserInput(
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked
		);
	}

	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this.handleChange.bind(this)}
				/><br />
				<input
					type="checkbox"
					checked={this.props.inStockOnly}
					ref="inStockOnlyInput"
					onChange={this.handleChange.bind(this)}
				/>Only show products stock
			</form>
		);
	}
}
