import logo from "../asset/logo.avif";
import { Link } from "react-router-dom";

function Checkout(props) {
    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">All Items(3)</h3>
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                        </td>
                                        <td><Link>Django</Link></td>
                                        <td>Rs 500</td>{" "}
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                        </td>
                                        <td><Link>PHP</Link></td>
                                        <td>Rs 800</td>{" "}
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                        </td>
                                        <td><Link>Flask</Link></td>
                                        <td>Rs 900</td>{" "}
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Total</th>
                                        <th>Rs 2000</th>
                                    </tr>
                                    <tr>
                                        <td colSpan='4' align="right">
                                            <Link to="/categories" className="btn btn-secondary me-2">Continue Shopping</Link>
                                            <Link className="btn btn-success">Proceed to Payment</Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
