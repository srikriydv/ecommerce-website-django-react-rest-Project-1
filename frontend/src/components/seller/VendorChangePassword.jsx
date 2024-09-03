import SellerSidebar from "./SellerSidebar";
import { useState } from "react";
import axios from "axios";

function VendorChangePassword() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const vendorId = localStorage.getItem("vendor_id");
    const [errorMsg, setErrorMsg] = useState(false);
    const [passwordData, setPasswordData] = useState({
        password: '',
        c_password: '',
    });

    const handleChange = (event) => {
        setPasswordData({
            ...passwordData,
            [event.target.name]: event.target.value
    });
    };

    // Handle form submission to update customer data
    const handleSubmit = (e) => {
        e.preventDefault();
        if(passwordData.password!=passwordData.c_password){
            setErrorMsg(true)
        }else{
            setErrorMsg(false)
            const formData = new FormData();
            // formUserData.append('user.id', profileData.id);
            formData.append('password', passwordData.password);
    
            // Submit Data
            axios.post(baseUrl + 'vendor/'+vendorId+'/update-password/', formData)
                .then((response) => {
                    console.log(response);
                    console.log(response.data)
                    alert("Password has been changed")
                })
                .catch((error) => {
                    console.log(error);
                });
        }


    };


    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Change Password</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                            <h4 className="card-header">Change Password</h4>
                            <div className="card-body">
                                {errorMsg && <p>Password didn't match</p>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label for="pwd" className="form-label">New Password</label>
                                        <input type="password" onChange={handleChange} name="password" value={passwordData.password} className="form-control" id="pwd" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="cpwd" className="form-label">Confirm Password</label>
                                        <input type="password" onChange={handleChange} name="c_password" value={passwordData.c_password} className="form-control" id="cpwd" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VendorChangePassword;