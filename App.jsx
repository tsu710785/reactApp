import React from 'react';


class ProductRow extends React.Component {
	constructor(props){
   		super(props);

	}
  	render() {
      	return (
			<tr>
      			<td>{this.props.products.price}</td>
      		</tr>
      	);
   	}
}

class SearchBar extends React.Component {
   
   render() {
      return (
         <div>
         	<input type="text"/>
         </div>
      );
   }
}

class Product extends React.Component {
   	
   	constructor(props){
   		super(props);

   		// this.row = {
   		// 	"a":"a"
   		// 	// var rows=[];
   		// 	// props.products.forEach(val=>this.rows.push(val));
   		// 	// // console.log(row);
   		// 	// return rows;
   		// };
   		// var row=[];
   		console.log(props.products);
   		
   		
   	}

	render() {
		var rows = this.props.products.map((product) => <ProductRow products={product} key={product.category} />);

		return (
        	 <table>
	           <thead>
	             <tr>
	               <th>Name</th>
	               <th>Price</th>
	             </tr>
	           </thead>
	           <tbody>{rows}</tbody>
	         </table>
      	);
   	}
}

// Product.defaultProps = { row: [] };

class ProductTable extends React.Component {
   
   render() {
      return (
         <div>
            <SearchBar/>
            <Product products={this.props.products}/>
         </div>
      );
   }
}

export default ProductTable;