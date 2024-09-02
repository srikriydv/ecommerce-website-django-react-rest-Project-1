import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

function Dashboard(props) {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [dashboardCounts, setDashboardCounts] = useState({
        totalOrders:0,
        totalWishlists:0,
        totalAddress:0
    });
    const customerId = localStorage.getItem("customer_id");
    const customerName = localStorage.getItem("customer_username")

    useEffect(() => {
        fetchData(baseUrl + "customer/" + customerId + "/dashboard/");
    }, []);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDashboardCounts({
                    totalOrders:data.totalOrders,
                    totalWishlists:data.totalWishlists,
                    totalAddress:data.totalAddress
                });
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
                    <h2>Welcome <Link className="text-danger" to='/customer/profile'>{customerName}</Link></h2>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Orders</h4>
                                        <h4><Link to="/customer/orders">{dashboardCounts.totalOrders}</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Wishlist</h4>
                                        <h4><Link to="/customer/wishlist">{dashboardCounts.totalWishlists}</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Addresses</h4>
                                        <h4><Link to="/customer/addresses">{dashboardCounts.totalAddress}</Link></h4>
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

export default Dashboard;