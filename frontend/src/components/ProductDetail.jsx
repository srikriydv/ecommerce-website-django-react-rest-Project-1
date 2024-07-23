import { Link } from "react-router-dom";
import logo from "../asset/logo.avif";
import SingleProduct from "./SingleProduct";

function ProductDetail(props) {
  return (
    <>
      <section className="container mt-4">
        <div className="row">
          <div className="col-4">
            <div
              id="productThumbnailSlider"
              className="carousel carousel-dark slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={logo} className="d-block w-100 img-thumbnail" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img
                    src={logo}
                    className="d-block w-100 img-thumbnail"
                    alt="second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img src={logo} className="d-block w-100 img-thumbnail" alt="third slide" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#productThumbnailSlider"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#productThumbnailSlider"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-8">
            <h3>Product Title</h3>
            <p>Product Description</p>
            <h5 className="card-title">Price: Rs 500</h5>
            <p className="mt-3">
              <button title="Add to Cart" className="btn btn-success">
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
              <button title="Buy Now" className="btn btn-primary ms-1">
                <i className="fa-solid fa-bag-shopping"></i> But Now
              </button>
              <button title="Add to Wishlist" className="btn btn-danger ms-1">
                <i className="fa fa-heart"></i> Add to Wishlist
              </button>
            </p>
            <hr />
            <div className="producttags">
              <h5 className="mt-3">Tags</h5>
              <p>
                <Link to="#" className="badge bg-secondary text-white me-1">
                  python
                </Link>
                <Link to="#" className="badge bg-secondary text-white me-1">
                  django
                </Link>
                <Link to="#" className="badge bg-secondary text-white me-1">
                  GoLang
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Related Product */}
        <h3 className="mt-4 mb-2">Related Products</h3>
        <div className="container">
          <div
            id="relatedProductsSlider"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row mb-5">
                  <SingleProduct title="Django Project" />
                  <SingleProduct title="Django Project" />
                  <SingleProduct title="PHP Project" />
                  <SingleProduct title="React Project" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="row mb-5">
                  <SingleProduct title="Django Project" />
                  <SingleProduct title="Django Project" />
                  <SingleProduct title="PHP Project" />
                  <SingleProduct title="React Project" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="row mb-5">
                  <SingleProduct title="Django Project" />
                  <SingleProduct title="Django Project" />
                  <SingleProduct title="PHP Project" />
                  <SingleProduct title="React Project" />
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#relatedProductsSlider"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#relatedProductsSlider"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      {/* End Related Product */}
    </>
  );
}
export default ProductDetail;
