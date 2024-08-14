import { UserContext, CartContext } from "../Context";
import { useContext } from "react";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/';

function ConfirmOrder() {
    const userContext = useContext(UserContext);
    const {cartData, SetCartData} = useContext(CartContext);
    console.log("usercontext =", userContext);
    if(userContext==null){
        window.location.href='/customer/login'
    }else{  
        console.log("usercontext", userContext);
        addOrderInTable();
    }

    function addOrderInTable(){
        const customerId = localStorage.getItem('customer_id');
        console.log("customer id", customerId);
        const formData = new FormData();
        formData.append('customer',customerId);
        console.log("formData", formData);
        // Submit Data
        axios.post(baseUrl + 'orders/', formData)
        .then(function (response) {
            console.log("response of addOrderInTable",response.data);
            var orderId = response.data.id;
            orderItems(orderId);
        })
        .catch(function (error) {
            // console.log(error);
        });
    }    

    function orderItems(orderId){
        console.log("order id bolte",orderId);
        var prevCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(prevCart);

        if(cartJson!=null){
            cartJson.map((cart, index)=>{
                const updatedCart = [...cartJson];
                const formData = new FormData();
                formData.append('order', orderId);
                formData.append('product', cart.product.id);
                formData.append('qty', 1);
                formData.append('price', cart.product.price);
                // Submit Data
                axios.post(baseUrl + 'orderitems/', formData)
                .then(function (response) {
                    console.log("Response of OrderItems",response.data);
                    // Remove Cart Items
                    cartJson.splice(index, 1);
                    localStorage.setItem('cartData', JSON.stringify(cartJson));
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
                
            });
            // Update localStorage and state after all items are processed
            localStorage.setItem('cartData', JSON.stringify(updatedCart));
            SetCartData(updatedCart);
            console.log("cartData after updating", cartData)
        }



    }

    return (
        <>
            <h1 className="text-center">your order is confirmed</h1>
        </>
    )
}

export default ConfirmOrder;