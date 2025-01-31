import React, { useState, useEffect } from "react";
import cubejs from "../cube";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Loader from "./Loader";

const LineCharts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const resultSet = await cubejs.load({
        measures: ["product.value"],
        timeDimensions: [
          {
            dimension: "product.timestamp",
            dateRange: ["2025-01-26", "2025-02-28"],
            granularity: "day",
          },
        ],
        order: {
          "product.timestamp": "asc",
        },
      });
      setData(resultSet.chartPivot());
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey={"product.value"} stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default LineCharts;
