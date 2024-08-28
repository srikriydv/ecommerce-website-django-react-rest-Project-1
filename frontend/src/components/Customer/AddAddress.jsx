import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

function AddAddress() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const customerId = localStorage.getItem("customer_id");
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [addressFormData, setAddressFormData] = useState({
        address: '',
        customer: customerId,
    });

    const handleChange = (event) => {
        setAddressFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    // Handle form submission to update customer data
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        // formUserData.append('user.id', profileData.id);
        formData.append('address', addressFormData.address);
        formData.append('customer', addressFormData.customer);

        // Submit Data
        axios.post(baseUrl + 'address/', formData)
            .then((response) => {
                if (response.status != 201) {
                    setErrorMsg('Data not Saved');
                    setSuccessMsg('');
                } else {
                    setErrorMsg('');
                    setSuccessMsg('Data saved');
                    setAddressFormData(
                        {
                            address: ''
                        }
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const DisabledBtn = (addressFormData.address == '');

    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Add Address</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12">
                        <div className="card">
                            <h4 className="card-header">Add Address</h4>
                            
                                {errorMsg && <p className="alert alert-danger m-2">{errorMsg}</p>}
                                {successMsg && <p className="alert alert-success m-2">{successMsg}</p>}
                            
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label for="address" className="form-label">Address</label>
                                        <textarea type="text" onChange={handleChange} name="address" value={addressFormData.address} className="form-control" id="address"></textarea>
                                    </div>
                                    <button type="submit" disabled={DisabledBtn} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAddress;