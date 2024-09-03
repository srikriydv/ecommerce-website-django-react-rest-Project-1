import SellerSidebar from "./SellerSidebar";
import { useState, useEffect } from "react";

function VendorProfile() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [previewImg, setPreviewImg] = useState('');
    const [profileData, setprofileData] = useState({
        id:'',
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        mobile: '',
        address: '',
        profile_img: '',
    });

    const vendorId = localStorage.getItem("vendor_id");

    // Fetch vendor data from the API
    useEffect(() => {
        fetchData()
    }, [vendorId]);

    function fetchData() {
        fetch(`${baseUrl}vendor/${vendorId}/`)
            .then(response => response.json())
            .then(data => {setprofileData({
                id: data.user.id,
                first_name: data.user.first_name,
                last_name: data.user.last_name,
                username: data.user.username,
                email: data.user.email,
                mobile: data.mobile,
                address: data.address,
                profile_img: data.profile_img || '', // If profile image is provided, set it accordingly
            });
            setPreviewImg(data.profile_img || '');
        })
            .catch(error => console.error('Error fetching vendor data:', error));
    }

    const handleChange = (event) => {
        setprofileData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setprofileData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.files[0]
        }));
    };

    // Handle form submission to update vendor data
    const handleSubmit = (e) => {
        e.preventDefault();

        const formUserData = new FormData();
        // formUserData.append('user.id', profileData.id);
        formUserData.append('username', profileData.username);
        formUserData.append('first_name', profileData.first_name);
        formUserData.append('last_name', profileData.last_name);
        formUserData.append('email', profileData.email);

        const formData = new FormData();
        formData.append('mobile', profileData.mobile);
        formData.append('address', profileData.address);

        if (profileData.profile_img) {
            formData.append('profile_img', profileData.profile_img);
        }

        fetch(`${baseUrl}vendor/${vendorId}/`, {
            method: 'PUT',
            body: formData,
        })
            .then(response => response.json())
            .then(data => console.log('vendor updated:', data))
            .catch(error => console.error('Error updating vendor data:', error));


        fetch(`${baseUrl}user/${profileData.id}/`, {
            method: 'PUT',
            body: formUserData,
        })
            .then(response => response.json())
            .then(data => console.log('User updated:', data))
            .catch(error => console.error('Error updating User data:', error));
    };


    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Profile</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <h3 className="mb-3">Welcome <span className="text-bold text-danger">{profileData.username}</span></h3>
                        <div className="card">
                            <h4 className="card-header">Update Profile</h4>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            name='first_name'
                                            value={profileData.first_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='last_name'
                                            id="last_name"
                                            value={profileData.last_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='username'
                                            id="username"
                                            value={profileData.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name='email'
                                            id="email"
                                            value={profileData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile" className="form-label">Mobile</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name='mobile'
                                            id="mobile"
                                            value={profileData.mobile}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobile" className="form-label">Address</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            name='mobile'
                                            id="mobile"
                                            value={profileData.address}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="profileImg" className="form-label">Profile Image</label>
                                        {profileData.profile_img && (
                                            <p><img
                                                src={previewImg}
                                                className="img-thumbnail"
                                                width={70}
                                                alt="Profile"
                                            /></p>
                                        )}
                                        <input
                                            type="file"
                                            className="form-control"
                                            name='profile_img'
                                            id="profile_img"
                                            onChange={handleFileChange}
                                        />
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

export default VendorProfile;