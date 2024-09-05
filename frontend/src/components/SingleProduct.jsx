import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SingleProduct(props) {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [Catagories, SetCatagories] = useState([]);
  useEffect(() => {
    fetchData(baseUrl + "/products/?vendor_cat=" + props.product.vendor.id);
  }, []);
  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        SetCatagories(data.results);
      });
  }

  console.log("produc image url", props.product.image);
  return (
    <>
      <div className="col-12 col-md-3 mb-4">
        <div className="card">
          <Link to={`/product/${props.product.title}/${props.product.id}`}><img src={props.product.image} className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link></h5>
            <h5 className="card-title text-muted">Price: Rs. {props.product.price}</h5>
          </div>
          <div className="card-footer">
            <button title="Add to Cart" className="btn btn-success">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button title="Add to Wishlist" className="btn btn-danger ms-1">
              <i className="fa fa-heart"></i>
            </button>
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
      </div>
    </>
  );
}

export default SingleProduct;
