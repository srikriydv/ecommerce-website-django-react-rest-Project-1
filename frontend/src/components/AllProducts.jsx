import logo from "../asset/logo.avif";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";

function AllProducts() {
  const [Products, setProducts] = useState([]);
  useEffect(() => { 
    fetchData('http://127.0.0.1:8000/api/products/')
  },[]);
  function fetchData(baseurl){
    fetch(baseurl) // api for the get request
    .then(response => response.json())
    .then((data) => setProducts(data.results));
  }
  return (
    <section className="container mt-4">
      <h3 className="mb-4">
        All Products
      </h3>
      <div className="row mb-4">
        {
          Products.map((product)=><SingleProduct product={product} />)
        }
      </div>
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
export default AllProducts;