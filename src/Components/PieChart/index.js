import React from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";


const MyPieChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="80%"
          animationBegin={0}
          animationDuration={800}
        >
          <Cell name="Unpaid" fill="#ED1313C3" />
          <Cell name="Paid" fill="#006600" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MyPieChart;
