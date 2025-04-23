"use client";

import { useState } from "react";
import Sidebar from "../../components/components_Sidebar";
import Header from "../../components/components_Header";
import AddPatientModal from "../../components/components_AddPatientModal";
import StatsOverview from "../../components/components_StatsOverview";
import VitalsChart from "../../components/components_VitalsChart";
import AppointmentTypeChart from "../../components/components_AppointmentTypeChart";
import PatientList from "../../components/components_PatientList";
import UpcomingAppointments from "../../components/components_UpcomingAppointments";

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

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle adding a new patient
  const handleAddPatient = (newPatient: {
    name: string;
    dueDate: string;
    weeks: string;
    status: string;
  }) => {
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
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header setIsModalOpen={setIsModalOpen} />
        <AddPatientModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPatient={handleAddPatient}
        />
        <StatsOverview patients={patients} appointments={appointments} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <VitalsChart />
          <AppointmentTypeChart appointments={appointments} />
        </div>
        <PatientList patients={patients} />
        <UpcomingAppointments appointments={appointments} />
      </main>
    </div>
  );
}
