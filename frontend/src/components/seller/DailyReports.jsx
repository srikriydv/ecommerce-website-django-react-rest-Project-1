import SellerSidebar from "./SellerSidebar";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function DailyReports() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [dates, setDates] = useState([]);
    const [counts, setCounts] = useState([]);
    const vendor_id = localStorage.getItem('vendor_id');

    useEffect(() => {
        fetchData(baseUrl + '/vendor/' + vendor_id);
    }, []);

    console.log(dates, counts);
    function fetchData(baseurl) {
        console.log(baseurl)
        fetch(baseurl) // api for the get request
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setDates(data.show_chart_daily_orders.dates);
                setCounts(data.show_chart_daily_orders.data);
                console.log(dates, counts);
            })
    }

    const chartOptions = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: dates
            }
        },
        series: [
            {
                name: "series-1",
                data: counts
            }
        ]
    };

    return (
        <>
            <div className="container w-75 mt-4">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <SellerSidebar />
                    </div>
                    <div className="col-md-9 col-12 mb-2">
                        <h3>Daily Reports</h3>
                        <div className="row">
                            <Chart options={chartOptions.options} series={chartOptions.series} type="bar" width="500" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DailyReports;
