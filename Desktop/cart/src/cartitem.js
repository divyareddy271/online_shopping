import React from "react";
class CartItem extends React.Component{
    constructor(){
        //import super parent class to work constuctor
        super();
        this.state = {
            price : 809,
            title : "My Phone",
            qty : 1,
            img :"",
        }
        //this.increasequantity = this.increasequantity.bind(this);
    }
    increasequantity = () => {
        //this.state.qty = this.state.qty + 1;
        //console.log(this.state);
        //set state form----------------------------------------------------1
        this.setState({
            qty : this.state.qty+1,
        }); 
    }
    decresequantity =() => {
        //this.state.qty = this.state.qty - 1;
        //console.log("decrease ",this.state);
        //set state form-----------------------------------------------------2
        const {qty} = this.state;
        if(qty == 0){
            return;
        }
        //this.setState({ number: 2 }, () => console.log(this.state.number));
        //this.setState({ number: 3 }, () => console.log(this.state.number));
        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1,
            }
        });
    }
       
    deleteitem =() =>{
        //this.state.qty = 0;
        //console.log("delete",this.state);
        this.setState({
                qty : 0,
            });
    }

    render(){
        const {price,title } = this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25} }>{title}</div>
                    <div style={ {color : '#777'} }>{price}</div>
                    <div style={ {color : '#777'} }>{this.state.qty}</div>
                    <div className="cart-item-actions">
                        {/*buttons */}
                        <img
                         alt="increase" 
                         className ="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                         onClick = {this.increasequantity}
                         />
                        <img
                         alt="decrease" 
                         className ="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                         onClick = {this.decresequantity}
                          />
                        <img
                         alt="delete" 
                         className ="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                         onClick = {this.deleteitem}
                         />
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    image : {
        height :110,
        width : 110,
        borderRadius : 4,
        backgroundColor: '#777'
    }
}
export default CartItem;