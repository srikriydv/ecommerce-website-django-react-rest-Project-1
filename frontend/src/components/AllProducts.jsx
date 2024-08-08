import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";

function AllProducts() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [Products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + '/products');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then(response => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResults(data.count);
        console.log("count of total data in that tag", data.count);
      })
  }

  function changeUrl(baseUrl) {
    fetchData(baseUrl);
  }

  var links = [];
  var limit = 2;
  var totalLinks = totalResults / limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li key={i} className="page-item">
        <Link onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
          to={`/products/?page=${i}`} className="page-link">
          {i}
        </Link>
      </li>
    )
  } 

  return (
    <section className="container mt-4">
      <h3 className="mb-4">
        All Products
      </h3>
      <div className="row mb-4">
        {
          Products.map((product) => <SingleProduct product={product} />)
        }
      </div>
      <nav aria-label="Page navigation example" className="mt-4">
        <ul className="pagination">

          {links}

        </ul>
      </nav>
    </section>
  );
}
export default AllProducts;