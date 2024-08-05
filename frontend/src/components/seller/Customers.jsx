import SellerSidebar from "./SellerSidebar";

function Customers() {


    return (
        <>
            <div className="container mt-4">
                <h3 className="mb-4">Dashboard</h3>
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobie</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                John Wick
                                            </td>
                                            <td>johntouchmydog@gmail.com</td>
                                            <td>9825223325</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">Orders</button>
                                                <button className="btn btn-danger btn-sm ms-2">Remove from List</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                John Constatine
                                            </td>
                                            <td>universedestroyerjogn@gmail.com</td>
                                            <td>983925335</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">Orders</button>
                                                <button className="btn btn-danger btn-sm ms-2">Remove from List</button>
                                            </td>
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

export default Customers;