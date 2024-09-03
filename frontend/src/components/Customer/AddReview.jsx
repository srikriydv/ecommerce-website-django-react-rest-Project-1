import Sidebar from "./Sidebar";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddReview() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const customerId = localStorage.getItem("customer_id");
    const { product_id, product_name } = useParams();
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [productFormData, setProductFormData] = useState({
        customer: customerId,
        product: product_id,
        review: '',
        rating: ''
    });

    const handleChange = (event) => {
        setProductFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    // Handle form submission to submit review and rating
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('customer', productFormData.customer);
        formData.append('product', productFormData.product);
        formData.append('review', productFormData.review);
        formData.append('rating', productFormData.rating);
        console.log(formData);

        // Submit Data
        axios.post(baseUrl + 'productrating/', formData)
            .then((response) => {
                if (response.status !== 201) {
                    setErrorMsg('Review not saved. Please try again.');
                    setSuccessMsg('');
                } else {
                    setErrorMsg('');
                    setSuccessMsg('Review submitted successfully.');
                    setProductFormData({
                        customer: customerId,
                        product: product_id,
                        review: '',
                        rating: ''
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                setErrorMsg('An error occurred. Please try again.');
            });
    };

    // Disable submit button if review or rating is empty
    const DisabledBtn = (!productFormData.review || !productFormData.rating);

    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Add Review</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12">
                        <div className="card">
                            <h4 className="card-header">Add Review</h4>
                            {errorMsg && <p className="alert alert-danger m-2">{errorMsg}</p>}
                            {successMsg && <p className="alert alert-success m-2">{successMsg}</p>}
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                        <label htmlFor="product" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" id="product" value={product_name} readOnly />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="review" className="form-label">Review</label>
                                        <textarea 
                                            type="text" 
                                            onChange={handleChange} 
                                            name="review" 
                                            value={productFormData.review} 
                                            className="form-control" 
                                            id="review">
                                        </textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="rating" className="form-label">Rating</label>
                                        <select 
                                            onChange={handleChange} 
                                            name="rating" 
                                            value={productFormData.rating} 
                                            className="form-control" 
                                            id="rating">
                                            <option value="">Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
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

export default AddReview;
