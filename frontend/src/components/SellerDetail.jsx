import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SellerDetail() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [productData, setProductData] = useState([]);  // Initialize as an array
  const [totalData, setTotalData] = useState(0);  // Assuming totalData is a number
  const [vendorData, setVendorData] = useState({});
  const [vendorImg, setVendorImg] = useState('');
  const { vendor_id } = useParams();

  useEffect(() => {
    fetchVendor(`${baseUrl}/vendor/${vendor_id}`);
    fetchProduct(`${baseUrl}/products/?vendor_id=${vendor_id}`);
  }, [vendor_id]);

  function fetchProduct(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProductData(data.results); 
        setTotalData(data.count); 
      })
      .catch(error => console.error('Error fetching products:', error));
  }

  function fetchVendor(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setVendorData(data.user); 
        setVendorImg(data.profile_img); 
      })
      .catch(error => console.error('Error fetching vendor:', error));
  }

  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <img src={vendorImg} className="img-thumbnail" alt="Vendor"></img>
        </div>
        <div className="col-8">
          <h3>{vendorData.username || 'Vendor Name'}</h3>
          <p>Total Products: {totalData}</p> {/* Corrected totalData display */}
        </div>
      </div>

      {/* Vendor Product */}
      <h3 className="row mt-5 font-weight-bold text-dark display-5">{vendorData.username} Products</h3>
      <div className="row mt-5">
        {productData.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default SellerDetail;
