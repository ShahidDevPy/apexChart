import './App.css';
import React from 'react';
import ApexChart from "./component/ApexChart";
import ApexHorizontalBarChart from "./component/ApexHorizontalBarChart";

const App = () => {

    return (
        <div className="app">

            <div className="app" style={{ display: "flex", flexDirection: "row" }}>
                <div className="row" style={{ marginRight: "20px" }}>
                    <div className="mixed-chart">
                        <h1 style={{ marginLeft: "20px" }}>Historical Number of Alerts</h1>
                        <ApexChart />
                    </div>
                </div>
                <div className="row" style={{ marginRight: "20px" }}>
                    <div className="mixed-chart">
                        <h1 style={{ marginLeft: "20px" }}>Workload per user</h1>
                        <ApexHorizontalBarChart />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default App;
