import logo from '../asset/logo.avif';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SingleSeller(props) {
  const baseUrl = "http://127.0.0.1:8000/api";
  const vendor = props.vendor;
  const [Catagories, SetCatagories] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + "/products/?vendor_cat=" + vendor.id);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl) // api for the get request
      .then((response) => response.json())
      .then((data) => {
        SetCatagories(data.results);
      });
  }

  return (
    <>
      <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <Link to={`/seller/${vendor.id}`} >
                <img src={vendor.profile_img} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <Link to={`/seller/${vendor.id}`}><h3 className="card-title">{vendor.user.username}</h3></Link>
                </div>
                <div className="card-footer">
                  Catagories: {Catagories.map((cat, index)=><Link to={`/category/${cat.slug}/${cat.category.id}`}>
                  {cat.category.title}
                </Link>)}
                </div>
              </div>
            </div>
    </>
  );
}

export default SingleSeller;
