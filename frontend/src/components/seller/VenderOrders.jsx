import SellerSidebar from "./SellerSidebar";
import logo from "../../asset/logo.avif"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function VenderOrders() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [Products, setProducts] = useState([]);
    const vendor_id = localStorage.getItem('vendor_id');

    useEffect(() => {
        fetchData(baseUrl + '/orderitems/?vendor_id=' + vendor_id);
    }, []);

    function fetchData(baseurl) {
        console.log(baseurl)
        fetch(baseurl) // api for the get request
            .then(response => response.json())
            .then((data) => {
                console.log(data.results);
                setProducts(data.results);
            })
    }

    const changeOrderStatus = (order_id, order_status) => {
        axios.put(baseUrl + '/orderitem/' + order_id + '/update-order-status/'+ order_status + '/')
            .then(function (response) {
                console.log(response);
                // alert(response.data.response);
                // window.location.href='/order/success';
                window.location.reload();
            })
            .catch(function (error) {
                // console.log(error);
                // window.location.href='/order/failure';
            });
    }

    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Dashboard</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Customer Name</th>
                                            <th>Payment Status</th>
                                            <th>Order Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Products.map((item, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Link><img src={item.product.image} className="img-thumbnail" width={70} alt="" /></Link>
                                                </td>
                                                <td><Link to={`/seller/update-product/${item.product.id}`}>{item.product.title}</Link></td>
                                                <td>{item.product.price}</td>
                                                <td>{item.order.customer.user.username}</td>
                                                <td>
                                                    <span className="text-success">
                                                        {item.order.payment_status == true && (<span className="text-success"><i className="fa-solid fa-circle-check text-success"></i> Completed</span>
                                                        )}
                                                        {item.order.payment_status == false && (<span className="text-success"><i className="fa-solid fa-circle-check text-dark"></i> Pending</span>
                                                        )}
                                                    </span>
                                                </td>
                                                <td>
                                                <span className="text-success">
                                                        {item.order_status == true && (<span className="text-success"><i className="fa-solid fa-circle-check text-success"></i> Completed</span>
                                                        )}
                                                        {item.order_status == false && (<span className="text-success"><i className="fa-solid fa-circle-check text-dark"></i> Pending</span>
                                                        )}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Change Status
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            <li onClick={()=>changeOrderStatus(item.id, 'true')}><a class="dropdown-item" href="#">Complete</a></li>
                                                            <li onClick={()=>changeOrderStatus(item.id, 'false')}><a class="dropdown-item" href="#">Pending</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VenderOrders;