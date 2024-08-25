import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function OrderRow(props) {
    const index = props.index;
    const item = props.item;
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [totalDownloads, setTotalDownloads] = useState(item.product.downloads)

    const countDownloads = (product_id) =>{
        // Submit Data
        axios.post(baseUrl+'update_product_download_count/'+product_id)
        .then(function (response){
            console.log("axios response log", response);
            console.log("product file name", item.product.product_file);
            if(response.data.bool == true){
                setTotalDownloads(++item.product.downloads);
                window.open(
                    item.product.product_file, // The URL to open
                    '_blank'                   // The target where to open the URL, '_blank' opens it in a new tab or window
                );
            }
        })
        .catch(function (error){
            console.log(error);
        })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <Link
                    to={`/product/${item.product.slug}/${item.product.id}`}
                >
                    <img
                        src={item.product.image}
                        className="img-thumbnail"
                        width={70}
                        alt=""
                    />
                </Link>
            </td>
            <td>
                <Link
                    to={`/product/${item.product.slug}/${item.product.id}`}
                >
                    {item.product.title}
                </Link>
            </td>
            <td>Rs {item.product.price}</td>
            <td>
                <span>
                    {item.order.order_status == true && (
                        <i className="fa-solid fa-circle-check text-success"></i>
                    )}
                    {item.order.order_status == false && (
                        <i className="fa-solid fa-circle-check text-dark"></i>
                    )}
                </span>
            </td>
            <td>
                {item.order.order_status == true && (
                    <button onClick={()=>countDownloads(item.product.id)} className="btn btn-primary btn-sm">
                        Download <span className="badge text-dark bg-white">{totalDownloads}</span>
                    </button>
                )}
            </td>
        </tr>
    )
}

export default OrderRow;
