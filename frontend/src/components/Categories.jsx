import React from "react";
import logo from "../asset/logo.avif";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Categories() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [categories, setCategories] = useState([]);
  const [totalResults, setTotalResults] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + '/categories');
  }, []);

  function fetchData(baseUrl) {
    fetch(baseUrl) // api for the get request
      .then(response => response.json())
      .then((data) => {
        setCategories(data.results);
        setTotalResults(data.count);
      })
  }

  function changeUrl(newUrl) {
    fetchData(newUrl);
  }

  var links = [];
  var limit = 1;
  var totalLinks = totalResults / limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li key={i} className="page-item">
        <Link onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)}
          to={`/categories/?page=${i}`} className="page-link">
          {i}
        </Link>
      </li>
    )
  } 

  return (
    <section className="container mt-4">
      {/* All Catagories  */}
      <h3 className="mb-4">All Categories</h3>
      <div className="row">
        {
          categories.map((category) =>
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt={category.title} />
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link>
                  </h4>
                </div>
                <div className="card-footer">Product Downloads: 2356</div>
              </div>
            </div>
          )
        }

      </div>
      {/* End Popular Catagories */}
      <nav aria-label="Page navigation example" className="mt-4">
        <ul class="pagination">
 
          {links}

        </ul>
      </nav>
    </section>
  );
}

export default Categories;
