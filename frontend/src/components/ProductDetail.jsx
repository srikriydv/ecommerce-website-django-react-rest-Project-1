import { createSearchParams, Link } from "react-router-dom";
import logo from "../asset/logo.avif";
import SingleProduct from "./SingleProduct";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext, UserContext } from "../Context";
import axios from "axios";

function ProductDetail() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [productData, setProductData] = useState({});
  const [productImgs, setProductImgs] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isInCart, setIsInCart] = useState(false);
  const [productInWishlist, setProductInWishlist] = useState(false);
  const { product_id } = useParams();
  const { cartData, setCartData } = useContext(CartContext);
  const {checkCustomer} = useContext(UserContext);

  useEffect(() => {
    fetchData(`${baseUrl}/product/${product_id}`);
    fetchRelatedData(`${baseUrl}/related-products/${product_id}`);
    checkProductInCart(product_id);
    checkProductInWishlist(baseUrl, product_id);
  }, [product_id]);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProductData(data);
        setProductImgs(data.product_imgs);
        setProductTags(data.tag_list);
      });
  }

  function fetchRelatedData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => setRelatedProducts(data.results));
  }

  const cartAddButtonHandler = () => {
    let prevCart = JSON.parse(localStorage.getItem('cartData')) || [];
    const newCartItem = {
      product: {
        id: productData.id,
        title: productData.title,
        price: productData.price,
        image: productData.image
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
    prevCart = prevCart.filter(cartItem => cartItem.product.id !== productData.id);
    localStorage.setItem('cartData', JSON.stringify(prevCart));
    setCartData(prevCart);
    setIsInCart(false);
  };

  function checkProductInCart(product_id) {
    const prevCart = JSON.parse(localStorage.getItem('cartData')) || [];
    const isInCart = prevCart.some(cartItem => cartItem.product.id == product_id);
    setIsInCart(isInCart);
  }

  const tagLinks = productTags.map((tag, index) => (
    <Link key={index} className="badge bg-secondary text-white me-1" to={`/products/${tag.trim()}`}>{tag.trim()}</Link>
  ));

  // Save in Wishlist
  function saveInWishlist(){
    const customerId = localStorage.getItem('customer_id');
    const formData = new FormData();
    formData.append('customer', customerId);
    formData.append('product', productData.id);
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

  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
            <div className="carousel-indicators">
              {productImgs.map((img, index) => (
                <button key={index} type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`}></button>
              ))}
            </div>
            <div className="carousel-inner">
              {productImgs.map((img, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#productThumbnailSlider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#productThumbnailSlider" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-8">
          <h3>{productData.title}</h3>
          <p>{productData.detail}</p>
          <h5 className="card-title">Price: Rs {productData.price}</h5>
          <p className="mt-3">
            <a title="Demo" href={productData.demo_url} className="btn btn-dark">
              <i className="fa-solid fa-cart-shopping"></i> Demo
            </a>
            {!isInCart && (
              <button title="Add to Cart" type="button" onClick={cartAddButtonHandler} className="btn btn-success ms-1">
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            )}
            {isInCart && (
              <button title="Remove from Cart" type="button" onClick={cartRemoveButtonHandler} className="btn btn-warning ms-1">
                <i className="fa-solid fa-cart-shopping"></i> Remove from Cart
              </button>
            )}
            <button title="Buy Now" className="btn btn-primary ms-1">
              <i className="fa-solid fa-bag-shopping"></i> Buy Now
            </button>
            {checkCustomer ? (
              <button title="Add to Wishlist" onClick={saveInWishlist} className={`btn btn-danger ms-1 ${productInWishlist ? 'disabled' : ''}`}>
                <i className="fa fa-heart"></i> {productInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            ) : (
              <button title="Add to Wishlist" className="btn btn-danger ms-1 disabled">
                <i className="fa fa-heart"></i> Add to Wishlist
              </button>
            )}
          </p>
          <hr />
          <div className="producttags">
            <h5 className="mt-3">Tags</h5>
            <p>{tagLinks}</p>
          </div>
        </div>
      </div>

      {/* Related Product */}
      <h3 className="mt-4 mb-2 text-center">Related Products</h3>
      <div className="container">
        <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {relatedProducts.map((product, index) => (
              <button key={index} type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {relatedProducts.map((product, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <SingleProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
