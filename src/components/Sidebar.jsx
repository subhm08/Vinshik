// src/components/Sidebar.jsx

import { FiHome, FiCalendar, FiMap, FiUsers, FiBriefcase, FiFileText, FiGrid } from 'react-icons/fi';

const navItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Calendar', icon: FiCalendar },
  { name: 'Map', icon: FiMap },
  { name: 'Clients', icon: FiUsers },
  { name: 'Jobs', icon: FiBriefcase },
  { name: 'Quotes', icon: FiFileText },
  { name: 'My Services', icon: FiGrid },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">VinShik</h1>
      </div>
      <nav className="p-4">
        <ul>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === 'Home';
            return (
              <li key={item.name} className="mb-2">
                <a
                  href="#"
                  className={`flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors
                    ${isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''}`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;