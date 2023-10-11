import './Chart.css';
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={totalMaximum}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
