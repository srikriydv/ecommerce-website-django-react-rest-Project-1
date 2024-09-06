import React from "react";
import logo from "../asset/logo.avif";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import SingleSeller from "./SingleSeller";
import { useState, useEffect } from "react";
import Testimonials from "./Testimonials";
import SingleCategories from "./SingleCategories";

function Home() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [Products, setProducts] = useState([]);
  const [PopProducts, setPopProducts] = useState([]);
  const [PopCategories, setPopCategories] = useState([]);
  const [Vendors, setVendors] = useState([]);
  const [ProductRating, setProductRating] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + "/products/?fetch_limit=4");
    fetchRating(baseUrl + "/productrating");
    fetchSellers(baseUrl + "/vendors/?fetch_limit=4")
    fetchPopularProduct(baseUrl + "/products/?pop=4")
    fetchPopularCategories(baseUrl + "/categories/?popular=4")
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
      });
  }
  function fetchPopularProduct(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        setPopProducts(data.results);
      });
  }
  function fetchPopularCategories(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        setPopCategories(data.results);
      });
  }
  function fetchRating(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        setProductRating(data.results);
      });
  }
  function fetchSellers(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        setVendors(data.results);
      });
  }

  return (
    <main className="mt-4">
      <div className="container w-75">
        {/* Latest Product  */}
        <h3 className="mb-4">
          Latest Product
          <Link to="/products" className="float-end btn btn-success">
            View All Product <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row mb-4">
          {/* Product Box */}
          {Products.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
          {/* End Latest Product */}
        </div>
        {/* Popular Catagories  */}
        <h3 className="mb-4">
          Popular Catagories
          <Link to="/categories" className="float-end btn btn-success">
            View All Catagories <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {/* Catagory Box */}
          {PopCategories.map((category, index)=>(
            <SingleCategories key={index} category={category} />
          ))}
          {/* Catagory Box End  */}
        </div>
        {/* End Popular Catagories */}

        {/* Popular Product  */}
        <h3 className="mb-4">
          Popular Product
          <Link to="/products" className="float-end btn btn-success">
            View All Product <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {/* Product Box */}
          {PopProducts.map((product, index)=>(
            <SingleProduct key={index} product={product} />
          ))}
          {/* Product Box End  */}
        </div>
        {/* End Popular Product */}

        {/* Popular Seller  */}
        <h3 className="mb-4">
          Popular Sellers
          <Link to="/sellers" className="float-end btn btn-success">
            View All Sellers <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {/* Seller Box */}
          {Vendors.map((vendor, index) => (
            <SingleSeller key={index} vendor={vendor} />
          ))}
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
            {ProductRating.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {ProductRating.map((item, index) => (
              <Testimonials index={index} item={item} key={index} />
            ))}
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
