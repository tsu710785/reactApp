import React from 'react';


// class ProductList extends React.Component {
// 	constructor(props){
//    		super(props);
//    		console.log(props.datas);
//
// 	}
//   	render() {
//       	return (
//       		<h5>
//       			{this.props.datas}
//       		</h5>
//       	);
//    	}
// }

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
   	}

	render() {
		var products = this.props.products;
		return (
      	<div>
					{products.map(function(p) {
						return (
							<div>
								<h3>{p.category}</h3>
								<h3>{p.price}</h3>
							</div>
						);
					})}
      	</div>
    	);
   	}
}


class ProductTable extends React.Component {
  constructor(props){

		super(props);

		this.state = {
			text: "product list",
			products: [
				{category:"A",price:"99.99"},
				{category:"B",price:"10"}
			]
		};

	}

   render() {
      return (
         <div>
            <SearchBar/>
            <Product products={this.state.products}/>
         </div>
      );
   }
}

export default ProductTable;
