import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import WishlistRow from "./WishlistRow";
import axios from "axios";

function Wishlist() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [wishlistItems, setWishlistItems] = useState([]);
    const customerId = localStorage.getItem("customer_id");

    useEffect(() => {
        fetchData(baseUrl + "customer/" + customerId + "/wishlistitems");
    }, []);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setWishlistItems(data.results);
            });
    }

    const handleRemoveItem = (itemId) => {
        axios.delete(`${baseUrl}customer/${customerId}/removewishlistitems/${itemId}`)
            .then(() => {
                // Remove item from the state
                setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container w-75 mt-4">
            <h3 className="mb-4">Wishlist</h3>
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlistItems.map((item, index) => (
                                        <WishlistRow
                                            key={item.id}
                                            item={item}
                                            index={index}
                                            onRemove={handleRemoveItem} // Pass the handler
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
