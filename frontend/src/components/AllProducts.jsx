import logo from "../asset/logo.avif";
import SingleProduct from "./SingleProduct";

function AllProducts() {
  return (
    <section className="container mt-4">
      <h3 className="mb-4">
        <span className="text-success fw-bold">Python</span> Product
      </h3>
      <div className="row mb-r">
        <SingleProduct title="Django Project"/>
        <SingleProduct title="PHP Project"/>
        <SingleProduct title="React Project"/>
        <SingleProduct title="Mern Project"/>
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