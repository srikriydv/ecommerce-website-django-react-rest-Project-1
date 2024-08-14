import logo from "../asset/logo.avif";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context";

function Checkout(props) {
    const { cartData, setCartData } = useContext(CartContext);
    const [productData, setProductData] = useState({});
    const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);

    const cartItems = cartData ? cartData.length : 0;
    
    let sum = 0;
    if (cartData) {
        sum = cartData.reduce((acc, item) => acc + parseFloat(item.product.price), 0);
    }

    const cartRemoveButtonHandler = (product_id) => {
        const prevCart = localStorage.getItem('cartData');
        let cartJson = JSON.parse(prevCart);
        cartJson = cartJson.filter(cart => cart.product.id !== product_id);
        localStorage.setItem('cartData', JSON.stringify(cartJson));
        setCartData(cartJson);
        setCartButtonClickStatus(false);
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">All Items ({cartItems})</h3>
            {cartItems !== 0 ? (
                <div className="row">
                    <div className="col-12">
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
                                    {cartData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link><img src={item.product.image} className="img-thumbnail" width='80' alt={item.product.title} /></Link>
                                            </td>
                                            <td>
                                                <Link to={`/product/${item.product.title}/${item.product.id}`}>{item.product.title}</Link>
                                            </td>
                                            <td>Rs {item.product.price}</td>
                                            <td>
                                                <button 
                                                    title="Remove from Cart" 
                                                    type="button" 
                                                    onClick={() => cartRemoveButtonHandler(item.product.id)} 
                                                    className="btn btn-warning ms-1"
                                                >
                                                    <i className="fa-solid fa-cart-shopping"></i> Remove from Cart
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Total</th>
                                        <th>Rs {sum}</th>
                                    </tr>
                                    <tr>
                                        <td colSpan='4' align="right">
                                            <Link to="/categories" className="btn btn-secondary me-2">Continue Shopping</Link>
                                            <Link to="/confirm-order" className="btn btn-success">Proceed to Payment</Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <Link to="/categories" className="btn btn-secondary me-2">Home</Link>
            )}
        </div>
    );
}

export default Checkout;
