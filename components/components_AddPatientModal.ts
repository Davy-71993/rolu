import { useState } from 'react';

interface AddPatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPatient: (patient: { name: string; dueDate: string; weeks: string; status: string }) => void;
}

export default function AddPatientModal({ isOpen, onClose, onAddPatient }: AddPatientModalProps) {
  const [newPatient, setNewPatient] = useState({
    name: '',
    dueDate: '',
    weeks: '',
    status: 'Stable',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPatient(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPatient(newPatient);
    setNewPatient({ name: '', dueDate: '', weeks: '', status: 'Stable' });
    onClose();
  };

  if (!isOpen) return null;

  return 

  // return (
  //   <div >
  //     // <div className="bg-white rounded-lg p-6 w-full max-w-md">
  //       // <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Patient</h3>
  //       // <form onSubmit={handleSubmit}>
  //       //   <div className="mb-4">
  //       //     <label className="block text-gray-700 mb-2" htmlFor="name">
  //       //       Name
  //       //     </label>
  //       //     <input
  //       //       type="text"
  //       //       id="name"
  //       //       name="name"
  //       //       value={newPatient.name}
  //       //       onChange={handleInputChange}
  //       //       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //       //       required
  //       //     />
  //       //   </div>
  //       //   <div className="mb-4">
  //       //     <label className="block text-gray-700 mb-2" htmlFor="dueDate">
  //       //       Due Date
  //       //     </label>
  //       //     <input
  //       //       type="date"
  //       //       id="dueDate"
  //       //       name="dueDate"
  //       //       value={newPatient.dueDate}
  //       //       onChange={handleInputChange}
  //       //       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //       //       required
  //       //     />
  //       //   </div>
  //       //   <div className="mb-4">
  //       //     <label className="block text-gray-700 mb-2" htmlFor="weeks">
  //       //       Weeks Pregnant
  //       //     </label>
  //       //     <input
  //       //       type="number"
  //       //       id="weeks"
  //       //       name="weeks"
  //       //       value={newPatient.weeks}
  //       //       onChange={handleInputChange}
  //       //       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //       //       min="1"
  //       //       max="40"
  //       //       required
  //       //     />
  //       //   </div>
  //       //   <div className="mb-4">
  //       //     <label className="block text-gray-700 mb-2" htmlFor="status">
  //       //       Status
  //       //     </label>
  //       //     <select
  //       //       id="status"
  //       //       name="status"
  //       //       value={newPatient.status}
  //       //       onChange={handleInputChange}
  //       //       className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //       //     >
  //       //       <option value="Stable">Stable</option>
  //       //       <option value="Monitoring">Monitoring</option>
  //       //       <option value="Critical">Critical</option>
  //       //     </select>
  //       //   </div>
  //       //   <div className="flex justify-end space-x-3">
  //       //     <button
  //       //       type="button"
  //       //       onClick={onClose}
  //       //       className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
  //       //     >
  //       //       Cancel
  //       //     </button>
  //       //     <button
  //       //       type="submit"
  //       //       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  //       //     >
  //       //       Add Patient
  //       //     </button>
  //       //   </div>
  //       // </form>
  //     // </div>
  //   </div>
   
  // )
}