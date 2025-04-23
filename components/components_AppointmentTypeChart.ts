import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface AppointmentTypeChartProps {
  appointments: { id: number; patient: string; date: string; time: string; type: string }[];
}

export default function AppointmentTypeChart({ appointments }: AppointmentTypeChartProps) {
  const appointmentTypeData = {
    labels: ['Checkup', 'Ultrasound', 'Consultation'],
    datasets: [
      {
        label: 'Appointments',
        data: [
          appointments.filter(a => a.type === 'Checkup').length,
          appointments.filter(a => a.type === 'Ultrasound').length,
          appointments.filter(a => a.type === 'Consultation').length,
        ],
        backgroundColor: ['rgba(59, 130, 246, 0.6)', 'rgba(34, 197, 94, 0.6)', 'rgba(234, 179, 8, 0.6)'],
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
        text: 'Distribution of Appointment Types',
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointment Types</h3>
      <Bar data={appointmentTypeData} options={chartOptions} />
    </div>
  );
}