import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import userServices from "../../../services/userServices";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [data, setData] = useState({
    usersCreatedAtCount: [],
    contributionData: [],
    totalActiveUsers: 0,
    totalNonActiveUsers: 0,
    totalRescued: 0,
    totalNotRescued: 0,
  });

  useEffect(() => {
    const getUsersChartData = async () => {
      try {
        const response = await userServices.getUsersPlotInfo();
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load data");
      }
    };
    getUsersChartData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row g-4">
        {/* Users Chart */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">User Registrations</h5>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={data.usersCreatedAtCount}
                  barSize={40}
                  barGap={6}
                  margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis
                    label={{
                      value: "Users",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                  <ReferenceLine y={0} stroke="#000" />
                  <Bar dataKey="count" fill="#6f42c1" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>

              {/* Stats */}
              <div className="d-flex justify-content-around mt-3">
                <span className="badge bg-success px-3 py-2">
                  Active: {data.totalActiveUsers}
                </span>
                <span className="badge bg-danger px-3 py-2">
                  Inactive: {data.totalNonActiveUsers}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contributions Chart */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">Contributions</h5>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={data.contributionData}
                  barSize={40}
                  barGap={6}
                  margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis
                    label={{
                      value: "Contributions",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                  <ReferenceLine y={0} stroke="#000" />
                  <Bar
                    dataKey="totalUploads"
                    fill="#20c997"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

              {/* Stats */}
              <div className="d-flex justify-content-around mt-3">
                <span className="badge bg-primary px-3 py-2">
                  Rescued: {data.totalRescued}
                </span>
                <span className="badge bg-secondary px-3 py-2">
                  Not Rescued: {data.totalNotRescued}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
