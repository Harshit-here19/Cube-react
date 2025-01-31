import React, { useState, useEffect } from "react";
import cubejs from "../cube";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Loader from "./Loader";

const BarCharts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const resultSet = await cubejs.load({
        measures: ["product.value"],
        dimensions: ["product.name"],
        order: {
          "product.timestamp": "asc",
        },
      });
      setData(resultSet.chartPivot());
    }

    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Bar dataKey={"product.value"} fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BarCharts;
