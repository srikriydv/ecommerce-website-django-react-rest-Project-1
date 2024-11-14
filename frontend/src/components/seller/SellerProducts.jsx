import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { useState, useEffect } from "react";
import axios from "axios";

function SellerProducts(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [Products, setProducts] = useState([]);
    const vendor_id = localStorage.getItem('vendor_id');

    useEffect(() => {
        fetchData(baseUrl + '/products/?vendor_id=' + vendor_id);
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

    const handleDelete = (product_id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            axios.delete(`${baseUrl}/product/${product_id}/`)
                .then((response) => {
                    // Handle successful deletion
                    alert('Product deleted successfully.');
                    // Optionally, refresh the product list or update the UI
                    window.location.reload();
                })
                .catch((error) => {
                    console.error('Error deleting product:', error);
                    alert('Error deleting product.');
                });
        }
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
                            <div className="col-12">
                                <Link to="/seller/add-product" className="btn btn-primary mb-4 float-end">
                                    <i className="fa fa-plus-circle"></i> Add Product
                                </Link>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Products.map((product, index) => 
                                            <tr>
                                                <td>{index+1}</td>
                                                <td><Link to={`/seller/update-product/${product.id}`}>{product.title}</Link></td>
                                                <td>{product.price}</td>
                                                <td>
                                                    {product.publish_status && <span className="text-success">Published</span>}
                                                    {!product.publish_status && <span className="text-secondary">Pending</span>}
                                                </td>
                                                <td>
                                                    <Link to={`/seller/update-product/${product.id}`} className="btn btn-primary ms-2">Edit</Link>
                                                    <Link onClick={()=>handleDelete(product.id)} className="btn btn-danger ms-2">Delete</Link>
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
        </>
    )
}

export default SellerProducts;