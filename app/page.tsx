"use client";

import { useState } from "react";
import {
  Bell,
  Calendar,
  Heart,
  User,
  FileText,
  Search,
  Plus,
} from "lucide-react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Mock data for demonstration (to be replaced with Supabase queries)
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Jane Smith",
      dueDate: "2025-08-15",
      weeks: 24,
      status: "Stable",
    },
    {
      id: 2,
      name: "Emma Johnson",
      dueDate: "2025-09-02",
      weeks: 20,
      status: "Monitoring",
    },
    {
      id: 3,
      name: "Sarah Davis",
      dueDate: "2025-07-20",
      weeks: 28,
      status: "Stable",
    },
  ]);

  const [appointments] = useState([
    {
      id: 1,
      patient: "Jane Smith",
      date: "2025-04-22",
      time: "10:00 AM",
      type: "Ultrasound",
    },
    {
      id: 2,
      patient: "Emma Johnson",
      date: "2025-04-23",
      time: "2:00 PM",
      type: "Checkup",
    },
    {
      id: 3,
      patient: "Sarah Davis",
      date: "2025-04-24",
      time: "11:00 AM",
      type: "Ultrasound",
    },
  ]);

  // State for modal and form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: "",
    dueDate: "",
    weeks: "",
    status: "Stable",
  });

  // Mock data for vitals line chart (blood pressure over time)
  const vitalsData = {
    labels: ["Week 18", "Week 19", "Week 20", "Week 21", "Week 22", "Week 23"],
    datasets: [
      {
        label: "Systolic BP (mmHg)",
        data: [120, 122, 118, 125, 123, 121],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
      },
      {
        label: "Diastolic BP (mmHg)",
        data: [80, 82, 79, 83, 81, 80],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.4,
      },
    ],
  };

  // Mock data for appointment type bar chart
  const appointmentTypeData = {
    labels: ["Checkup", "Ultrasound", "Consultation"],
    datasets: [
      {
        label: "Appointments",
        data: [
          appointments.filter((a) => a.type === "Checkup").length,
          appointments.filter((a) => a.type === "Ultrasound").length,
          appointments.filter((a) => a.type === "Consultation").length,
        ],
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)",
          "rgba(34, 197, 94, 0.6)",
          "rgba(234, 179, 8, 0.6)",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock adding patient (replace with Supabase insert)
    setPatients((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newPatient.name,
        dueDate: newPatient.dueDate,
        weeks: parseInt(newPatient.weeks),
        status: newPatient.status,
      },
    ]);
    // Reset form and close modal
    setNewPatient({ name: "", dueDate: "", weeks: "", status: "Stable" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Rythm of Life</h1>
        </div>
        <nav className="mt-6">
          <a
            href="#"
            className="flex items-center px-6 py-3 text-blue-600 bg-blue-50"
          >
            <User className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Appointments
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
          >
            <Heart className="w-5 h-5 mr-3" />
            Vitals
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
          >
            <FileText className="w-5 h-5 mr-3" />
            Notes
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Nursing Assistant Dashboard
          </h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Patient
            </button>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
              NA
            </div>
          </div>
        </header>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Add New Patient
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newPatient.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="dueDate">
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={newPatient.dueDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="weeks">
                    Weeks Pregnant
                  </label>
                  <input
                    type="number"
                    id="weeks"
                    name="weeks"
                    value={newPatient.weeks}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    max="40"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={newPatient.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Stable">Stable</option>
                    <option value="Monitoring">Monitoring</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add Patient
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-700">
              Total Patients
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {patients.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-700">
              Upcoming Appointments
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {appointments.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-700">
              Critical Cases
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {patients.filter((p) => p.status === "Monitoring").length}
            </p>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Vitals Line Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Patient Vitals (Blood Pressure)
            </h3>
            <Line
              data={vitalsData}
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: { display: true, text: "Blood Pressure Trends" },
                },
              }}
            />
          </div>

          {/* Appointment Type Bar Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Appointment Types
            </h3>
            <Bar
              data={appointmentTypeData}
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: {
                    display: true,
                    text: "Distribution of Appointment Types",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Patient List */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold text-gray-800">
              Patient Overview
            </h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="p-4">Name</th>
                <th className="p-4">Due Date</th>
                <th className="p-4">Weeks</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-t">
                  <td className="p-4">{patient.name}</td>
                  <td className="p-4">{patient.dueDate}</td>
                  <td className="p-4">{patient.weeks}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        patient.status === "Stable"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-blue-600 hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold text-gray-800">
              Upcoming Appointments
            </h3>
          </div>
          <div className="p-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex justify-between items-center py-3 border-b"
              >
                <div>
                  <p className="text-gray-800 font-medium">
                    {appointment.patient}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {appointment.date} at {appointment.time} -{" "}
                    {appointment.type}
                  </p>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
