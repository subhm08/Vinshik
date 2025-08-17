import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ">
        <Header />
        <Dashboard userName="Julie" />
      </main>
    </div>
  );
}

export default App;