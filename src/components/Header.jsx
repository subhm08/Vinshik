import { FiMail, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-end p-4 items-center mb-8 shadow-md border-b-2 border-b-slate-300">
      
      <div className="flex items-center space-x-5">
        <button className="text-gray-500 hover:text-gray-800">
          <FiMail size={22} />
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          <FiBell size={22} />
        </button>
        <button>
        <img
          src="https://i.pravatar.cc/40?img=1"
          alt="User Avatar"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        </button>
      </div>
    </header>
  );
};

export default Header;