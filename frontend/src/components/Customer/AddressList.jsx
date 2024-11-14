import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AddressList() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [addressItems, setAddressItems] = useState([]);
    const customerId = localStorage.getItem("customer_id");

    useEffect(() => {
        fetchData(baseUrl + "customer/" + customerId + "/address/");
    }, []);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setAddressItems(data.results);
            });
    }

    const handleDefaultAddress = (address,address_id) =>{
        const formData = new FormData();
        // formUserData.append('user.id', profileData.id);
        formData.append('address', address);
        formData.append('customer', customerId);
        formData.append('default_address', true);

        // Submit Data
        axios.post(baseUrl + 'make-default-address/'+address_id+'/', formData)
            .then((response) => {
                console.log(response);
                if (response.data.bool == true) {
                    window.location.reload();
                } else {
                    console.log('not 200');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="container w-75 mt-4">
                <h3 className="mb-4">Wishlist</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-12">
                                <Link to="/customer/add-address" className="btn btn-outline-success mb-4 float-end"><i className="fa fa-plus-circle"></i> Add Address</Link>
                            </div>
                        </div>
                        <div className="row">
                        {addressItems.length > 0 ? (
                                addressItems.map((item, index) => (
                                    <div className="col-4 mb-4" key={index}>
                                        <div className="card">
                                            <div className="card-body text-muted">
                                            <h6>
                                                    {item.default_address && <span role="button"><i className="fa fa-check-circle text-success mb-2"></i><br /></span>}
                                                    {!item.default_address && <span role="button" onClick={()=>handleDefaultAddress(item.address,item.id)}><i className="far fa-check-circle text-secondary mb-2"></i><br /></span>}
                                                    <Link to={`/customer/update-address/${item.id}`}>{item.address}</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <p>No addresses found.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressList;