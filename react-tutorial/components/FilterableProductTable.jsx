import React from 'react';
import ReactDOM from 'react-dom';

import products from '../data';

import SearchBar from './SearchBar/SearchBar.jsx';
import ProductTable from './ProductTable/ProductTable.jsx';


class FilterableProductTable extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
	}
	// getInitialState() {
	// 	return {
	// 		filterText: 'ball',
	// 		inStockOnly: false
	// 	};
	// }

	// onInputChange(filterText) {
	// 	this.setState({filterText: filterText});
	// }
	//
	// onSelectChange(inStockOnly) {
	// 	this.setState({inStockOnly: inStockOnly});
	// }

	handleUserInput(filterText, inStockOnly) {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		});
	}

	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput={this.handleUserInput.bind(this)}
				/>
				<ProductTable
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}

				/>
			</div>
		);
	}
}

ReactDOM.render(
	<FilterableProductTable products={products} />,
	document.getElementById('content')
);
