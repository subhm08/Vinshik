import StatCard from './StatCard';

const dashboardStats = [
    {
        title: 'Active Jobs',
        value: '43.7k',
        change: '+12.2%',
        isPositive: true,
        chartColor: 'blue',
    },
    {
        title: 'Jobs in Progress',
        value: '92.3k',
        change: '-1.1%',
        isPositive: false,
        chartColor: 'orange',
    },
    {
        title: 'Finished Jobs',
        value: '66.3k',
        change: '+3.2%',
        isPositive: true,
        chartColor: 'green',
    },
    {
        title: 'New Leads',
        value: '92.3k',
        change: '+21.1%',
        isPositive: true,
        chartColor: 'purple',
    },
];

const Dashboard = ({ userName }) => {
    return (
        <div className="dashboard px-2">
            <div className='user-card pb-4'>
                <h2 className="text-3xl font-bold text-gray-800">
                    Welcome back, {userName} 👋
                </h2>
                <p className="text-gray-500 mt-1">Here's what you need to focus on today</p>
            </div>
            <div className="user-stats-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        isPositive={stat.isPositive}
                        chartColor={stat.chartColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;