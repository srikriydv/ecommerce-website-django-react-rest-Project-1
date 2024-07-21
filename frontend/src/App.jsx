import { useState } from "react";
import logo from "./asset/logo.avif";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const linkStyle = {
    fontSize: "40px",
  };
  return (
    <>
      <Header />
      <main className="mt-4">
        <div className="container">
          {/* Latest Product  */}
          <h3 className="mb-4">
            Latest Product{" "}
            <a href="#" className="float-end btn btn-dark">
              View All Product <i className="fa-solid fa-arrow-right-long"></i>
            </a>
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
                    <i className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box End  */}
          </div>
          {/* End Latest Product */}

          {/* Popular Catagories  */}
          <h3 className="mb-4">
            Popular Catagories{" "}
            <a href="#" className="float-end btn btn-dark">
              View All Catagories{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
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
            Popular Product{" "}
            <a href="#" className="float-end btn btn-dark">
              View All Product <i className="fa-solid fa-arrow-right-long"></i>
            </a>
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
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
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger ms-1"
                  >
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
        </div>
      </main>
    </>
  );
}

export default App;
