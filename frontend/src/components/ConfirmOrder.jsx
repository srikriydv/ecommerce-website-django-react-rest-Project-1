import { UserContext, CartContext } from "../Context";
import { useContext, useState } from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"

const baseUrl = 'http://127.0.0.1:8000/api/';

function ConfirmOrder() {
    const userContext = useContext(UserContext);
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [payMethod, setPayMethod] = useState('');
    const { cartData, setCartData } = useContext(CartContext);
    console.log("usercontext =", userContext);
    if (userContext == null) {
        window.location.href = '/customer/login'
    } else {
        console.log("usercontext", userContext);
        if (confirmOrder == false) {
            addOrderInTable();
        }
    }

    function addOrderInTable() {
        const customerId = localStorage.getItem('customer_id');
        console.log("customer id", customerId);
        const formData = new FormData();
        formData.append('customer', customerId);
        console.log("formData", formData);
        // Submit Data
        axios.post(baseUrl + 'orders/', formData)
            .then(function (response) {
                console.log("response of addOrderInTable", response.data);
                var orderId = response.data.id;
                setOrderId(orderId);
                orderItems(orderId);
                console.log("confirmoder value true or false", confirmOrder);
                setConfirmOrder(true);
            })
            .catch(function (error) {
                // console.log(error);
            });
    }

    function orderItems(orderId) {
        console.log("order id bolte", orderId);
        var prevCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(prevCart);

        if (cartJson != null) {
            cartJson.map((cart, index) => {
                const formData = new FormData();
                formData.append('order', orderId);
                formData.append('product', cart.product.id);
                formData.append('qty', 1);
                formData.append('price', cart.product.price);
                // Submit Data
                axios.post(baseUrl + 'orderitems/', formData)
                    .then(function (response) {
                        console.log("Response of OrderItems", response.data);
                        // Remove Cart Items
                        cartJson.splice(index, 1);
                        localStorage.setItem('cartData', JSON.stringify(cartJson));
                        setCartData(cartJson);

                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            });
        }
    }

    function changePaymentMethod(payMethod) {
        setPayMethod(payMethod);
    }
    function PayNowButton() {
        if (payMethod != '') {
            changePaymentMethod(payMethod);
        } else {
            alert('Select Payment Method');
        }
    }
    function PaymentSuccess() {
        updateOrderStatus(orderId, true);
    }
    function updateOrderStatus(order_id, order_status) {
        console.log("Order id and order status = ", order_id, order_status);
        // Submit Data
        axios.post(baseUrl + 'update-order-status/'+ orderId)
            .then(function (response) {
                console.log(response);
                alert('Your payment is successful');
                window.location.href='/customer/orders';
            })
            .catch(function (error) {
                // console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 offset-3">
                    <div className="card py-3 text-center">
                        <h3><i className="fa fa-check-circle text-success"></i> Your Order has been confirmed</h3>
                        <h5>ORDER ID: {orderId}</h5>
                    </div>
                    <div className="card p-3 mt-3">
                        <form className="mb-3">
                            <div className="form-group">
                                <label>
                                    <input type="radio" onChange={() => changePaymentMethod('paypal')} name='payMethod' /> Paypal
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    <input type="radio" onChange={() => changePaymentMethod('stripe')} name='payMethod' /> Stripe
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    <input type="radio" onChange={() => changePaymentMethod('razorpay')} name='payMethod' /> RazorPay
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    <input type="radio" onChange={() => changePaymentMethod('paytm')} name='payMethod' /> PayTm
                                </label>
                            </div>
                            <button type="button" onClick={PayNowButton} className="btn btn-sm btn-success">Next</button>
                        </form>
                        {payMethod === 'paypal' &&
                            <PayPalScriptProvider options={{ "client-id": "AamkANxBl6yRXzin2Fi9eyvhCFFBH9iws9dthJMqyWVPQ_Y_Pd6FxZWpqjWmPQVUHFTy3MIsqI7uyLib" }}>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        currency_code: 'USD',
                                                        value: '3',
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            const name = details.payer.name.given_name;
                                            alert(`Transaction completed by ${name}`);
                                        });
                                    }}
                                />
                                <button className="btn btn-sm btn-success" onClick={PaymentSuccess}>Click here</button>
                            </PayPalScriptProvider>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmOrder;