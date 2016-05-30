import React from 'react';

import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

export default class ProductTable extends React.Component {
    render() {
        let rows = [],
            lastCategory = null;

        this.props.products.forEach(product => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            lastCategory = product.category;
        });

        // this.props.products.forEach(product => {
        //     if (product.category !== lastCategory) {
        //         rows.push(
        //             <ProductCategoryRow category={product.category} key={product.category} />
        //         );
        //     }
        //     rows.push(
        //         <ProductRow product={product} key={product.name} />
        //     );
        //     lastCategory = product.category;
        // });

		return (
			<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
		);
	}
}
