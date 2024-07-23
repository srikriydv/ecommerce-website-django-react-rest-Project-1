import React from "react";
import logo from "../asset/logo.avif";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="container mt-4">
      {/* All Catagories  */}
      <h3 className="mb-4">All Catagories</h3>
      <div className="row">
        {/* Catagory Box */}
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">
                <Link to="/category/python/1">Catagory title</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/">Catagory title</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/">Catagory title</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/">Catagory title</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/">Catagory title</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/">Catagory title</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/">Catagory title</Link>
              </h4>
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
              <h4 className="card-title">
                <Link to="/">Catagory title</Link>
              </h4>
            </div>
            <div className="card-footer">Product Downloads: 2356</div>
          </div>
        </div>
        {/* Catagory Box End  */}
      </div>
      {/* End Popular Catagories */}
      <nav aria-label="Page navigation example" className="mt-4">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Categories;
