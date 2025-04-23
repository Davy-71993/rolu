interface UpcomingAppointmentsProps {
  appointments: { id: number; patient: string; date: string; time: string; type: string }[];
}

export default function UpcomingAppointments({ appointments }: UpcomingAppointmentsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold text-gray-800">Upcoming Appointments</h3>
      </div>
      <div className="p-6">
        {appointments.map(appointment => (
          <div key={appointment.id} className="flex justify-between items-center py-3 border-b">
            <div>
              <p className="text-gray-800 font-medium">{appointment.patient}</p>
              <p className="text-gray-600 text-sm">
                {appointment.date} at {appointment.time} - {appointment.type}
              </p>
            </div>
            <button className="text-blue-600 hover:underline">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}