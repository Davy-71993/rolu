interface PatientListProps {
  patients: { id: number; name: string; dueDate: string; weeks: number; status: string }[];
}

export default function PatientList({ patients }: PatientListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-8">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold text-gray-800">Patient Overview</h3>
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
          {patients.map(patient => (
            <tr key={patient.id} className="border-t">
              <td className="p-4">{patient.name}</td>
              <td className="p-4">{patient.dueDate}</td>
              <td className="p-4">{patient.weeks}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    patient.status === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {patient.status}
                </span>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:underline">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}