import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { useState, useEffect } from "react";

function SellerDashboard(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [totalCounts, setTotalCounts] = useState({
        'totalProducts': '',
        'totalOrders': '',
        'totalCustomers': '',
    });
    const vendor_id = localStorage.getItem('vendor_id');

    useEffect(() => {
        fetchData(baseUrl + '/vendor/' + vendor_id + '/dashboard/');
    }, []);

    function fetchData(baseurl) {
        console.log(baseurl)
        fetch(baseurl) // api for the get request
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setTotalCounts({
                    'totalProducts': data.totalProducts,
                    'totalOrders': data.totalOrders,
                    'totalCustomers': data.totalCustomers,
                });
                console.log(setTotalCounts);
            })
    }

    return (
        <>
            <div className="container w-75 mt-4">
                <h3 className="mb-4">Dashboard</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Products</h4>
                                        <h4><Link to='/seller/products'>{totalCounts.totalProducts}</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Orders</h4>
                                        <h4><Link to='/seller/orders'>{totalCounts.totalOrders}</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Customers</h4>
                                        <h4><Link to='/seller/customers'>{totalCounts.totalCustomers}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerDashboard;