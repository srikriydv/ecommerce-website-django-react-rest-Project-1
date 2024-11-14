import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TagProducts() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const {tag} = useParams();
  console.log("tag", tag);
  useEffect(() => {
    fetchData(baseUrl + '/products/'+tag);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then(response => response.json())
      .then((data) => {
        console.log(data.results);
        setProducts(data.results);
        setTotalResults(data.count);
        console.log("total tag count", totalResults);
      })
  }

  function changeUrl(newUrl) {
    fetchData(newUrl);
  }

  var links = [];
  var limit = 4;
  var totalLinks = Math.ceil(totalResults / limit);
  console.log("total link count is 2 or not", totalLinks);
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li key={i} className="page-item">
        <Link onClick={() => changeUrl(baseUrl + `/products/${tag}?page=${i}`)}
          to={`/products/${tag}/?page=${i}`} className="page-link">
          {i}
        </Link>
      </li>
    )
  } 

  return (
    <section className="container w-75 mt-4">
      <h3 className="mb-4">
        All Products
      </h3>
      <div className="row mb-4">
        {
          products.map((product) => <SingleProduct product={product} />)
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
export default TagProducts;