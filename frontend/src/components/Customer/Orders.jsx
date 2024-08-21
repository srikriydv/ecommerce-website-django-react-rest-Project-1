import Sidebar from "./Sidebar";
import logo from "../../asset/logo.avif";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {orderItems.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link
                                                            to={`/product/${item.product.slug}/${item.product.id}`}
                                                        >
                                                            <img
                                                                src={item.product.image}
                                                                className="img-thumbnail"
                                                                width={70}
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={`/product/${item.product.slug}/${item.product.id}`}
                                                        >
                                                            {item.product.title}
                                                        </Link>
                                                    </td>
                                                    <td>Rs {item.product.price}</td>
                                                    <td>
                                                        <span>
                                                            {item.order.order_status == true && (
                                                                <i className="fa-solid fa-circle-check text-success"></i>
                                                            )}
                                                            {item.order.order_status == false && (
                                                                <i className="fa-solid fa-circle-check text-dark"></i>
                                                            )}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {item.order.order_status == true && (
                                                            <a target="_blank" download href={item.product.product_file} className="btn btn-primary btn-sm">
                                                                Download
                                                            </a>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
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
