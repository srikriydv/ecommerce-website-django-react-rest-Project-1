import React from "react";
import logo from "../asset/logo.avif";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";

function Home() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + '/products/?fetch_limit=4');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then(response => response.json())
      .then((data) => {
        setProducts(data.results);
      })
  }


  return (
    <main className="mt-4">
      <div className="container">
        {/* Latest Product  */}
        <h3 className="mb-4">
          Latest Product
          <Link to="/products" className="float-end btn btn-dark">
            View All Product <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          {/* Product Box */}
          {
            Products.map((product) => <SingleProduct product={product} />)
          }
          {/* End Latest Product */}
        </div>
        {/* Popular Catagories  */}
        <h3 className="mb-4">
          Popular Catagories
          <Link to="/categories" className="float-end btn btn-dark">
            View All Catagories <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {/* Catagory Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Catagory title</h4>
              </div>
              <div className="card-footer">Product Downloads: 2356</div>
            </div>
          </div>
          {/* Catagory Box End  */}
          {/* Catagory Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Catagory title</h4>
              </div>
              <div className="card-footer">Product Downloads: 2356</div>
            </div>
          </div>
          {/* Catagory Box End  */}
          {/* Catagory Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Catagory title</h4>
              </div>
              <div className="card-footer">Product Downloads: 2356</div>
            </div>
          </div>
          {/* Catagory Box End  */}
          {/* Catagory Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Catagory title</h4>
              </div>
              <div className="card-footer">Product Downloads: 2356</div>
            </div>
          </div>
          {/* Catagory Box End  */}
        </div>
        {/* End Popular Catagories */}

        {/* Popular Product  */}
        <h3 className="mb-4">
          Popular Product
          <Link to="/products" className="float-end btn btn-dark">
            View All Product <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {/* Product Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>
              <div className="card-footer">
                <button title="Add to Cart" className="btn btn-success">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button title="Add to Wishlist" className="btn btn-danger ms-1">
                  <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Product Box End  */}
          {/* Product Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>
              <div className="card-footer">
                <button title="Add to Cart" className="btn btn-success">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button title="Add to Wishlist" className="btn btn-danger ms-1">
                  <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Product Box End  */}
          {/* Product Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>
              <div className="card-footer">
                <button title="Add to Cart" className="btn btn-success">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button title="Add to Wishlist" className="btn btn-danger ms-1">
                  <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Product Box End  */}
          {/* Product Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>
              <div className="card-footer">
                <button title="Add to Cart" className="btn btn-success">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button title="Add to Wishlist" className="btn btn-danger ms-1">
                  <i className="fa fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Product Box End  */}
        </div>
        {/* End Popular Product */}

        {/* Popular Seller  */}
        <h3 className="mb-4">
          Popular Sellers
          <a href="#" className="float-end btn btn-dark">
            View All Sellers <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>
        <div className="row">
          {/* Seller Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Seller title</h4>
              </div>
              <div className="card-footer">
                Catagories: <a href="#">Python</a> <a href="#">JavaScript</a>
              </div>
            </div>
          </div>
          {/* Seller Box End  */}
          {/* Seller Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Seller title</h4>
              </div>
              <div className="card-footer">
                Catagories: <a href="#">Python</a>
              </div>
            </div>
          </div>
          {/* Seller Box End  */}
          {/* Seller Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Seller title</h4>
              </div>
              <div className="card-footer">
                Catagories: <a href="#">JavaScript</a>
              </div>
            </div>
          </div>
          {/* Seller Box End  */}
          {/* Seller Box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Seller title</h4>
              </div>
              <div className="card-footer">
                Catagories: <a href="#">GoLang</a> <a href="#">Swift</a>
              </div>
            </div>
          </div>
          {/* Seller Box End  */}
        </div>
        {/* End Popular Catagories */}

        {/* Review and Ratings  */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide my-4 border bg-dark text-white p-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>Customer 1 review</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>Customer 2 review </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>Customer 3 review</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* End Review and Ratings  */}
        {/* footer  */}

        {/* End Footer */}
      </div>
    </main>
  );
}

export default Home;
