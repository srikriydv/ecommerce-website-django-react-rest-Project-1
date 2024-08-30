import React, { useState, useEffect } from "react";
import axios from "axios";
import SellerSidebar from "./SellerSidebar";

function AddProduct() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const vendorId = localStorage.getItem("vendor_id");
    const vendorName = localStorage.getItem("vendor_username");
    console.log(vendorId);
    const [formData, setFormData] = useState({
        category: '',
        vendor: vendorId,
        title: '',
        slug: '',
        detail: '',
        price: '',
        tags: '',
        image: null,
        demo_url: '',
        product_file: null,
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from the backend
        axios.get(baseUrl + 'categories/')
            .then(response => {
                console.log(response.data.results);
                setCategories(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (files) {
            // Handle file input
            setFormData({ ...formData, [id]: files[0] });
            console.log(formData);
        } else {
            setFormData({ ...formData, [id]: value });
            console.log(formData);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const data = new FormData();
        data.append('category', formData.category);
        data.append('vendor', formData.vendor);
        data.append('title', formData.title);
        data.append('slug', formData.slug);
        data.append('detail', formData.detail);
        data.append('price', formData.price);
        data.append('tag_list', [formData.tags]);
        data.append('demo_url', formData.demo_url);

        console.log(data.tags);
        console.log(formData.tags);
        
        if (formData.image) data.append('image', formData.image);  // Correct key for image
        if (formData.product_file) data.append('product_file', formData.product_file);  // Correct key for product file

        console.log(data);

        axios.post(baseUrl + 'products/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            alert('Product added successfully!');
            setFormData({
                category: '',
                vendor: vendorId,
                title: '',
                slug: '',
                detail: '',
                price: '',
                tag_list: '',
                image: null,
                demo_url: '',
                product_file: null,
            });
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
            alert('Error submitting form.');
        });
    };

    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Add Product</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="card">
                            <h4 className="card-header">Add Product</h4>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="vendor" className="form-label">Vendor Name</label>
                                        <input type="text" className="form-control" id="vendor" value={vendorName} readOnly />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <select className="form-control" id="category" value={formData.category} onChange={handleChange}>
                                            <option value="">Select Category</option>
                                            {categories.map(category => (
                                                <option key={category.id} value={category.id}>
                                                    {category.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" value={formData.title} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="slug" className="form-label">Slug</label>
                                        <input type="text" className="form-control" id="slug" value={formData.slug} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="price" step="0.01" value={formData.price} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="detail" className="form-label">Detail</label>
                                        <textarea className="form-control" rows="6" id="detail" value={formData.detail} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tags" className="form-label">Tags (comma-separated)</label>
                                        <input type="text" className="form-control" id="tags" value={formData.tags} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="demo_url" className="form-label">Demo URL</label>
                                        <input type="url" className="form-control" id="demo_url" value={formData.demo_url} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Product Images</label>
                                        <input type="file" className="form-control" id="image" onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="product_file" className="form-label">Product File</label>
                                        <input type="file" className="form-control" id="product_file" onChange={handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProduct;
