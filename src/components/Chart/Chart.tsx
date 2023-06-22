import ChartBar from "./ChartBar";
import "./Chart.css";
import React from "react";

interface Props {
  dataPoints: { label: string; value: number }[];
}

const Chart: React.FC<Props> = (props) => {
  const totalMax = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
