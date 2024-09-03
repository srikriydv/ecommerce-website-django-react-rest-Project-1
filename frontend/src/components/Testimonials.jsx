import { useState, useEffect } from "react";
import axios from "axios";

function Testimonials(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [customer, setCustomer] = useState({});
    const item = props.item;
    const index = props.index;

    // Generate star icons based on rating
    const _star = [];
    for (let i = 0; i < item.rating; i++) {
        _star.push(<i key={i} className="fa fa-star text-warning"></i>);
    }

    useEffect(() => {
        // Fetch customer details when component mounts
        handleCustomerName(item.customer);
    }, [item.customer]); // Dependency on item.customer

    const handleCustomerName = async (customer_id) => {
        try {
            const response = await axios.get(`${baseUrl}/customer/${customer_id}/`);
            setCustomer(response.data);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    return (
        <div className="carousel-item active">
            <figure className="text-center">
                <blockquote className="blockquote">
                    <p>{item.review}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <span>{_star}</span>
                    <div>
                        {/* Check if customer object is not empty */}
                        {customer.user && <cite title="Source Title">{customer.user.username}</cite>}
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default Testimonials;
