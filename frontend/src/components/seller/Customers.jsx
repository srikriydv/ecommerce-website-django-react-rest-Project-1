import SellerSidebar from "./SellerSidebar";
import { useState,useEffect } from "react";

function Customers() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [orderItems, setOrderItems] = useState([]);
    const vendor_id = localStorage.getItem('vendor_id');

    useEffect(() => {
        fetchData(baseUrl + '/vendor/' + vendor_id +'/customers');
    }, []);

    function fetchData(baseurl) {
        console.log(baseurl)
        fetch(baseurl) // api for the get request
            .then(response => response.json())
            .then((data) => {
                console.log(data.results);
                setOrderItems(data.results);
                console.log(orderItems);
            })
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
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobie</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderItems.map((item, index)=>
                                            <tr>
                                            <td>{index+1}</td>
                                            <td>
                                                {item.user.username}
                                            </td>
                                            <td>{item.user.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">Orders</button>
                                                <button className="btn btn-danger btn-sm ms-2">Remove from List</button>
                                            </td>
                                        </tr>
                                        )
                                        }
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

export default Customers;