import React, { useState, useEffect } from "react";
import cubejs from "../cube";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import Loader from "./Loader";

const COLORS = ["#0088fe", "#00c49f", "#ffbb28", "#ff8042"];

const PieCharts = () => {
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
          <PieChart>
            <Pie
              data={data}
              dataKey="product.value"
              nameKey="x"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PieCharts;
