interface StatsOverviewProps {
  patients: { id: number; name: string; dueDate: string; weeks: number; status: string }[];
  appointments: { id: number; patient: string; date: string; time: string; type: string }[];
}

export default function StatsOverview({ patients, appointments }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-700">Total Patients</h3>
        <p className="text-3xl font-bold text-blue-600">{patients.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-700">Upcoming Appointments</h3>
        <p className="text-3xl font-bold text-blue-600">{appointments.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-700">Critical Cases</h3>
        <p className="text-3xl font-bold text-blue-600">
          {patients.filter(p => p.status === 'Monitoring').length}
        </p>
      </div>
    </div>
  );
}