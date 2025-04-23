import { Calendar, Heart, User, FileText } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">PregnancyCare</h1>
      </div>
      <nav className="mt-6">
        <a href="#" className="flex items-center px-6 py-3 text-blue-600 bg-blue-50">
          <User className="w-5 h-5 mr-3" />
          Dashboard
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <Calendar className="w-5 h-5 mr-3" />
          Appointments
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <Heart className="w-5 h-5 mr-3" />
          Vitals
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <FileText className="w-5 h-5 mr-3" />
          Notes
        </a>
      </nav>
    </aside>
  );
}