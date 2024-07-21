import { useState } from "react";
import logo from "./asset/logo.avif";

function App() {
  const [count, setCount] = useState(0);
  const linkStyle = {
    fontSize: '40px'
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" style={linkStyle} href="#">
            Python Market Place
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="mt-4">
        <div className="container">
          <h3 className="mb-4">Latest Product <a href="#" className="float-end btn btn-dark">View All Product <i className="fa-solid fa-arrow-right-long"></i></a></h3>
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
        </div>
      </main>
    </>
  );
}

export default App;
