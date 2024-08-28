import { Link } from "react-router-dom";

function WishlistRow(props) {
    const { index, item, onRemove } = props;
    const baseUrl = "http://127.0.0.1:8000";

    const removeWishlistHandler = () => {
        onRemove(item.id); // Call the function passed from parent
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                    <img
                        src={`${baseUrl}${item.product.image}`}
                        className="img-thumbnail"
                        width={70}
                        alt=""
                    />
                </Link>
            </td>
            <td>
                <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                    {item.product.title}
                </Link>
            </td>
            <td>Rs {item.product.price}</td>
            <td>
                <button onClick={removeWishlistHandler} className="btn btn-danger btn-sm">
                    Remove
                </button>
            </td>
        </tr>
    );
}

export default WishlistRow;
