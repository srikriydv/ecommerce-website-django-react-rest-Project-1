import { Link } from "react-router-dom";
import logo from "../asset/logo.avif";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [productData, setProductData] = useState({});
  const [productImgs, setProductImgs] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { product_id } = useParams();
  console.log("product id", product_id);

  useEffect(() => {
    console.log("useEffect triggered with product_id:", product_id);
    fetchData(baseUrl + '/product/' + product_id);
    fetchRelatedData(baseUrl + '/related-products/' + product_id)
  }, [product_id]);


  function fetchData(baseurl) {
    console.log(baseurl);
    fetch(baseurl) // api for the get request
      .then(response => response.json())
      .then((data) => {
        console.log("data for fetdata", data);
        setProductData(data);
        console.log("product image data", data.product_imgs);
        setProductImgs(data.product_imgs);
        setProductTags(data.tag_list);
        console.log("product tag", productTags);
      })
  }

  function fetchRelatedData(baseurl) {
    console.log(baseurl);
    fetch(baseurl) // api for the get request
      .then(response => response.json())
      .then((data) => {
        setRelatedProducts(data.results)
        console.log("fetrelated product", relatedProducts);
        console.log("related product count", data.count);
      })
  }

  const tagLinks = [];
  for (let i = 0; i < productTags.length; i++) {
    console.log("product tag", productTags);
    let tag = productTags[i].trim();
    console.log("tag", tag);
    tagLinks.push(<Link className="badge bg-secondary text-white me-1" to={`/products/${tag}`}>{tag}</Link>);
    console.log("tagLinks", tagLinks);
  }




  return (
    <>
      <section className="container mt-4">
        <div className="row">
          <div className="col-4">
            <div
              id="productThumbnailSlider"
              className="carousel carousel-dark slide carousel-fade"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                {productImgs.map((img, index) => {
                  if (index === 0) {
                    return <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                  } else {
                    return <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to={index} aria-current="true" aria-label="Slide 1"></button>
                  }
                })}
              </div>
              <div className="carousel-inner">
                {
                  productImgs.map((img, index) => {
                    if (index === 0) {
                      return <div className="carousel-item active">
                        <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                      </div>
                    } else {
                      return <div className="carousel-item">
                        <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                      </div>
                    }
                  })
                }
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
            <h3>{productData.title}</h3>
            <p>{productData.detail}</p>
            <h5 className="card-title">Price: Rs {productData.price}</h5>
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
                {tagLinks}
              </p>
            </div>
          </div>
        </div>

        {/* Related Product */}
        <h3 className="mt-4 mb-2 text-center">Related Products</h3>
        <div className="container">
          <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="carousel">

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {relatedProducts.map((product, index) => (
                <button
                  key={index}  // Added key to avoid React warnings
                  type="button"
                  data-bs-target="#relatedProductsSlider"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}  // Used a conditional statement to assign "active" class to the first item
                  aria-current={index === 0 ? "true" : undefined}  // Adjusted aria-current only for the active slide
                  aria-label={`Slide ${index + 1}`}  // Corrected aria-label to reflect the correct slide number
                ></button>
              ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
              {relatedProducts.map((product, index) => (
                <div
                  key={index}  // Added key for unique identification
                  className={`carousel-item ${index === 0 ? "active" : ""}`}  // Conditional class for "active"
                >
                  <SingleProduct product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
      {/* End Related Product */}
    </>
  );
}
export default ProductDetail;
