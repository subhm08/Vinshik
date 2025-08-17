import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const MiniBarChart = ({ color }) => {
  const barHeights = ['h-4', 'h-7', 'h-5', 'h-8', 'h-6'];
  const colorVariants = {
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className="flex items-end h-10 space-x-1">
      {barHeights.map((height, index) => (
        <div key={index} className={`w-1.5 rounded-full ${colorVariants[color]} ${height}`}></div>
      ))}
    </div>
  );
};

const StatCard = ({ title, value, change, isPositive, chartColor }) => {
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';
  const ChangeIcon = isPositive ? FiArrowUp : FiArrowDown;

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <div className={`flex items-center text-xs font-semibold mt-1 ${changeColor}`}>
            <ChangeIcon className="mr-1" />
            <span>{change}</span>
          </div>
          <p className="text-3xl font-bold my-2 text-gray-800">{value}</p>
        </div>
        <MiniBarChart color={chartColor} />
      </div>
    </div>
  );
};

export default StatCard;