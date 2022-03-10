import React from 'react';
import CartItem from "./cartitem"
import Cart from "./cart"
import Navbar from "./navbar"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { render } from '@testing-library/react';
class App extends React.Component{
    constructor(){
      //import super parent class to work constuctor
      super();
      this.state = {
        products: [
          /*{
            price: 20000,
            title: "Watch",
            qty: 1,
            img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            id: 0,
          },
          {
            price: 9009,
            title: "Mobile",
            qty: 10,
            img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            id: 1,
          },
          {
            price: 8090,
            title: "Laptop",
            qty: 6,
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            id: 2,
          },*/
        ],
        loading : true,
      }
      this.db = firebase.firestore();
      //this.increasequantity = this.increasequantity.bind(this);
    }
    componentDidMount(){
      /*firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        
      const products = snapshot.docs.map((doc) => {
        const data = doc.data(); 
        console.log(doc.data());
        data["id"]=doc.id;
        return data;
      })
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      })
        this.setState ({
          products,
          loading : false
        })
    })*/
    this.db
      .collection("products")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        
      const products = snapshot.docs.map((doc) => {
        const data = doc.data(); 
        console.log(doc.data());
        data["id"]=doc.id;
        return data;
      })
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      })
        this.setState ({
          products,
          loading : false
        })
    })
     
    }
    handleincreaseQuantity = (product) => {
     // console.log("increase qunty", product);
      const { products } = this.state;
      const index = products.indexOf(product);
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty : products[index].qty+1,
      }).then(() => {
        console.log("qty  has updated successfully!!")
      }).catch((error) => {
        console.log("error",error);
      })
     /* products[index].qty += 1
      this.setState({
        products: products
      })*/

    }
    handledecreaseQuantity = (product) => {

      const { products } = this.state;
      const index = products.indexOf(product);
      const docRef = this.db.collection('products').doc(products[index].id);
      if (products[index].qty > 0) {
        docRef
      .update({
        qty : products[index].qty-1,
      }).then(() => {
        console.log("qty decresed successfully!!")
      }).catch((error) => {
        console.log("error",error);
      })
      }
    }
    handledeleteproduct = (id) => {

      console.log("delete product", id);
      const { products } = this.state;
      const items = products.filter((item) => item.id !== id);
      const docRef = this.db.collection('products').doc(id);
      docRef
      .delete()
      .then(() => {
        console.log("product deleted successfully!!")
      }).catch((error) => {
        console.log("error",error);
      })
      
      //const index = products.indexOf(product);
      // products[index]=products[index+1]; 
     // console.log("delete product", items);
      //this.setState({
       // products: items
      //})
    }
    getCartCount =() => {
      const{products} = this.state;
      let count = 0;
      products.forEach((product) => {
        count += product.qty;
      });
      return count;
    }
    getCartTotal =() => {
      const{products} = this.state;
      let Totalcount = 0;
      products.map((product)=>{
        Totalcount += product.qty * product.price;
      })
      return Totalcount;
    }
    addProduct =()=>{
      this.db
      .collection('products')
      .add({
        img : '',
        price:1000,
        qty:20,
        title:"Washing Machine",
      }).then((docRef)=>{
        console.log(docRef);
      })
      .catch((error) => {
        console.log("errorr");
      })
    }
    render(){
      const {products,onIncreaseQuantity,ondecreaseQuantity,loading} = this.state
      return (
        <div className="App">
          <Navbar 
          count= {this.getCartCount()}
          />
          <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add Products</button>
          <Cart
           products={products}
           key= {products.id}
           onIncreaseQuantity = {this.handleincreaseQuantity}
           ondecreaseQuantity = {this.handledecreaseQuantity}
           Ondelete = {this.handledeleteproduct}
          />
          {loading && <h1>Loading Products...</h1>}
          <div style={{padding : 10,fontSize:20}}>Total: {this.getCartTotal()}</div>
          
        </div>
      );
    }

  }/*
  import React from "react";

  class App extends React.Component{
    constructor() {
      super();
      this.state = {
        value: 0
      };
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (nextState.value > 5) return false;
      return true;
    }
   
    componentDidMount() {
      setInterval(() => {
        this.setState((prevState) => {
          return {
            value: prevState.value + 1
          };
        });
      });
    }
    render() {
      console.log(this.state.value);
      return <div>{this.state.value}</div>;
    }
  }
  */
  export default App;
