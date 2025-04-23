import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function VitalsChart() {
  const vitalsData = {
    labels: ['Week 18', 'Week 19', 'Week 20', 'Week 21', 'Week 22', 'Week 23'],
    datasets: [
      {
        label: 'Systolic BP (mmHg)',
        data: [120, 122, 118, 125, 123, 121],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Diastolic BP (mmHg)',
        data: [80, 82, 79, 83, 81, 80],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Blood Pressure Trends',
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Patient Vitals (Blood Pressure)</h3>
      <Line data={vitalsData} options={chartOptions} />
    </div>
  );
}