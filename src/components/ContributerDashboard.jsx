import "../styles/ContributorDashboard.css";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ContributorDashboard = () => {
  const { user } = useLoaderData();

  // Sample data for the charts
  const contributions = user.data.user.contributions || [];
  const totalContributions = contributions.length;
  const totalRescued = contributions.filter(
    (contribution) => contribution.status === "rescued"
  ).length;
  const successRate = Math.round((totalRescued / totalContributions) * 100);

  const successRateData = [
    { name: "Rescued", value: totalRescued },
    { name: "Not Rescued", value: totalContributions - totalRescued },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="container glassy-container">
      <div className="row mb-2">
        <div
          className="col-md-12 text-center p-4 border rounded glassy-header"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          <h2>Welcome, {user.data.user.firstname}</h2>
          <p>Here is the summary of your contributions.</p>
        </div>
      </div>

      <div className="row mb-2 p-2 border rounded glassy-stats">
        <div className="col-md-6">
          <h3>Total Contributions: {totalContributions}</h3>
        </div>
        <div className="col-md-6">
          <h3>Total Rescued: {totalRescued}</h3>
        </div>
      </div>

      <div className="row mb-4 border rounded pt-2 glassy-chart ">
        <div className="col-md-12 text-center">
          <h4>Success Rate: {successRate}%</h4>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={successRateData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {successRateData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ContributorDashboard;
