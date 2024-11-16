import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { PopulationChartProps } from "@/interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PopulationChart({
  data,
}: {
  data: PopulationChartProps;
}) {
  const chartData = {
    labels: data.populationCounts.map((entry) => entry.year),
    datasets: [
      {
        label: `Population of ${data.country}`,
        data: data.populationCounts.map((entry) => entry.value),
        borderColor: "#34D399",
        backgroundColor: "rgba(52, 211, 153, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Population Growth of ${data.country}`,
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.raw.toLocaleString()} people`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
        ticks: {
          callback: function (value: any) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
