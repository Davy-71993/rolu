import { Bell, Search, Plus } from 'lucide-react';

interface HeaderProps {
  setIsModalOpen: (open: boolean) => void;
}

export default function Header({ setIsModalOpen }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-semibold text-gray-800">Nursing Assistant Dashboard</h2>
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
  );
}