import Sidebar from "./Sidebar";
import logo from "../../asset/logo.avif"
import { Link } from "react-router-dom";

function Wishlist() {


    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Wishlist</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                            </td>
                                            <td><Link>Django</Link></td>
                                            <td>Rs 500</td>
                                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                            </td>
                                            <td><Link>PHP</Link></td>
                                            <td>Rs 800</td>
                                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <Link><img src={logo} className="img-thumbnail" width={70} alt="" /></Link>
                                            </td>
                                            <td><Link>Flask</Link></td>
                                            <td>Rs 600</td>
                                            <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist;