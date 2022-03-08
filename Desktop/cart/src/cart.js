import React from "react";
import CartItem from "./cartitem"
class Cart extends React.Component{
    constructor(){
        //import super parent class to work constuctor
        super();
        this.state = {
           products:[
            {
                price : 20000,
                title : "Watch",
                qty : 1,
                img :"",
                id:0,
            },
            {
                price : 9009,
                title : "Mobile",
                qty : 10,
                img :"",
                id:1,
            },
            {
                price : 8090,
                title : "Laptop",
                qty : 6,
                img :"",
                id:2,
            },
           ]
        }
        //this.increasequantity = this.increasequantity.bind(this);
    }
    handleincreaseQuantity =(product) => {
        console.log("increase qunty",product);
        const {products} = this.state; 
        const index = products.indexOf(product);
        products[index].qty += 1
        this.setState({
            products : products
        })
        
    }
    handledecreaseQuantity =(product) => {
        
        console.log("decrease qunty",product);
        const {products} = this.state; 
        const index = products.indexOf(product);
        if(products[index].qty>0){
            products[index].qty -= 1
            this.setState({
                products : products
            })
        }  
    }
    handledeleteproduct =(id) => {
        
        console.log("delete product",id);
        const {products} = this.state; 
        const items = products.filter((item) => item.id !== id);
        //const index = products.indexOf(product);
      // products[index]=products[index+1]; 
      console.log("delete product",items); 
       this.setState({
           products:items
       })
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
            {products.map((products) => {
                return(
                    <CartItem 
                    products={products}
                    key= {products.id}
                    onIncreaseQuantity = {this.handleincreaseQuantity}
                    ondecreaseQuantity = {this.handledecreaseQuantity}
                    Ondelete = {this.handledeleteproduct}
                    />
                )
               
            })
        }
            </div>
        );
    }
}

export default Cart;