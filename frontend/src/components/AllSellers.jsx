import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import SingleSeller from "./SingleSeller";

function AllSellers() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [Sellers, setSellers] = useState([]);
  const [totalResults, setTotalResults] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + '/vendors');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then(response => response.json())
      .then((data) => {
        setSellers(data.results);
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
        <Link onClick={() => changeUrl(baseUrl + `/vendors/?page=${i}`)}
          to={`/sellers/?page=${i}`} className="page-link">
          {i}
        </Link>
      </li>
    )
  } 

  return (
    <section className="container w-75 mt-4">
      <h3 className="mb-4">
        All Sellers
      </h3>
      <div className="row mb-4">
        {
          Sellers.map((vendor, index) => <SingleSeller vendor={vendor} key={index} />)
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
export default AllSellers;