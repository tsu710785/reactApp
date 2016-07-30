import React from 'react';


class ProductList extends React.Component {
	constructor(props){
   		super(props);
   		console.log(props.datas);

	}
  	render() {
      	return (
      		<h5>
      			{this.props.datas}
      		</h5>
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
		return (
        	<ProductList datas={this.props.products.price} key={this.props.products.category} />

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