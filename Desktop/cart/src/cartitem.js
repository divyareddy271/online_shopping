import React from "react";
const CartItem = (props) =>{
    /*constructor(){
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
        const {price,title,qty } = this.props.products;*/
        const {products,onIncreaseQuantity,ondecreaseQuantity}=props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={products.img} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25} }>{products.title}</div>
                    <div style={ {color : '#777'} }>{products.price}</div>
                    <div style={ {color : '#777'} }>{products.qty}</div>
                    <div className="cart-item-actions">
                        {/*buttons */}
                        <img
                         alt="increase" 
                         className ="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                         onClick = {() => onIncreaseQuantity(props.products)}
                         />
                        <img
                         alt="decrease" 
                         className ="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick = {() => ondecreaseQuantity (props.products)}
                          />
                        <img
                         alt="delete" 
                         className ="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                       onClick = {() => props.Ondelete(props.products.id)}
                         />
                    </div>
                </div>
            </div>
        );

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