import Sidebar from "./Sidebar";
import logo from "../../asset/logo.avif";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderRow from "./OrderRow";

function Orders() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [orderItems, setOrderItems] = useState([]);
    const customerId = localStorage.getItem("customer_id");

    useEffect(() => {
        fetchData(baseUrl + "customer/" + customerId + "/orderitems");
    }, []);

    function fetchData(baseUrl) {
        fetch(baseUrl) // api for the get request
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setOrderItems(data.results);
                console.log(orderItems);
            });
    }

    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Dashboard</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="text-center">
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Payment Status</th>
                                            <th>Order Status</th>
                                            <th>Action</th>
                                            <th>Add Review</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {orderItems.map((item, index) => {
                                            return <OrderRow item={item} key={index} index={index} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;
