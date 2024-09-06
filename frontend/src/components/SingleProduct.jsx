import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CartContext, UserContext } from '../Context';
import axios from 'axios';

function SingleProduct(props) {
  const baseUrl = "http://127.0.0.1:8000/api";
  const imgStyle = {
    width: '100%',
    height: '30vh', 
    maxHeight: '250px', 
    objectFit: 'cover',
  };
  const [Catagories, SetCatagories] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const [productInWishlist, setProductInWishlist] = useState(false);
  const { cartData, setCartData } = useContext(CartContext);
  const {checkCustomer} = useContext(UserContext);



  useEffect(() => {
    fetchData(baseUrl + "/products/?vendor_cat=" + props.product.vendor.id);
    checkProductInCart(props.product.id);
    checkProductInWishlist(baseUrl, props.product.id);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        SetCatagories(data.results);
      });
  }

  const cartAddButtonHandler = () => {
    let prevCart = JSON.parse(localStorage.getItem('cartData')) || [];
    const newCartItem = {
      product: {
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
        image: props.product.image
      },
      user: { id: 1 }
    };
    prevCart.push(newCartItem);
    localStorage.setItem('cartData', JSON.stringify(prevCart));
    setCartData(prevCart);
    setIsInCart(true);
  };

  const cartRemoveButtonHandler = () => {
    let prevCart = JSON.parse(localStorage.getItem('cartData')) || [];
    prevCart = prevCart.filter(cartItem => cartItem.product.id !== props.product.id);
    localStorage.setItem('cartData', JSON.stringify(prevCart));
    setCartData(prevCart);
    setIsInCart(false);
  };

  function checkProductInCart(product_id) {
    const prevCart = JSON.parse(localStorage.getItem('cartData')) || [];
    const isInCart = prevCart.some(cartItem => cartItem.product.id == product_id);
    setIsInCart(isInCart);
  }

  // Save in Wishlist
  function saveInWishlist(){
    const customerId = localStorage.getItem('customer_id');
    const formData = new FormData();
    formData.append('customer', customerId);
    formData.append('product', props.product.id);
    console.log(formData);
    // Submit Data
    axios.post(baseUrl + '/wishlist/', formData)
      .then(function (response) {
        setProductInWishlist(true);
        console.log(response);

        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function checkProductInWishlist(baseUrl, product_id) {
    const customerId = localStorage.getItem('customer_id');
    const formData = new FormData();
    formData.append('customer',customerId);
    formData.append('product',product_id);
    // Submit Data
    axios.post(baseUrl + '/check-in-wishlist/', formData)
      .then(function (response) {
        if(response.data.bool==true){
          setProductInWishlist(true);
          console.log(productInWishlist);
        }
      })
      .catch(function (error) {
        setProductInWishlist(false);
      });
  }



  console.log("produc image url", props.product.image);
  return (
    <>
      <div className="col-12 col-md-3 mb-4">
        <div className="card bg-dark">
          <Link to={`/product/${props.product.title}/${props.product.id}`}><img style={imgStyle} src={props.product.image} className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link></h5>
            <h5 className="card-title text-success">Price: Rs. {props.product.price}</h5>
          </div>
          <div className='ms-3'>
            {!isInCart && (
              <button title="Add to Cart" type="button" onClick={cartAddButtonHandler} className="btn btn-success">
                <i className="fa fa-cart-shopping"></i>
              </button>
            )}
            {isInCart && (
              <button title="Remove from Cart" type="button" onClick={cartRemoveButtonHandler} className="btn btn-warning">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            )}
            {checkCustomer ? (
              <button title="Add to Wishlist" onClick={saveInWishlist} className={`btn btn-danger ms-2 ${productInWishlist ? 'disabled' : ''}`}>
                {productInWishlist ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i>}
              </button>
            ) : (
              <button title="Add to Wishlist" className="btn btn-warning ms-2 disabled">
                <i className="fa fa-heart"></i>
              </button>
            )}
          </div>
            {/* <hr /> */}
            <div className='card-footer mt-2'>
              <div>
                Catagories: {Catagories.map((cat, index) => <Link to={`/category/${cat.slug}/${cat.category.id}`}>
                  {cat.category.title}
                </Link>)}
              </div>
              <div>
                Downloads: {props.product.downloads}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default SingleProduct;
