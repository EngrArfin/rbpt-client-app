import { BarCharts } from "./Shared/BarCharts";
import { CircleChart } from "./Shared/CircleChart";
import { MobBarChart } from "./Shared/MobBarChart";

export function DashboardContent() {
  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6 bg-gray-50">
      {/* Header Section */}
      {/*  <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg flex items-center hover:bg-blue-700 transition duration-300 ease-in-out">
          <i className="fas fa-calendar-alt text-5xl mr-4"></i>
          <div>
            <div className="text-4xl font-bold">04</div>
            <p className="mt-2 text-sm opacity-90">Recent Appointments</p>
          </div>
        </div>

        <div className="bg-red-600 rounded-2xl p-6 text-white shadow-lg flex items-center hover:bg-red-700 transition duration-300 ease-in-out">
          <i className="fas fa-clock text-5xl mr-4"></i>
          <div>
            <div className="text-4xl font-bold">02</div>
            <p className="mt-2 text-sm">Running Appointments</p>
          </div>
        </div>

        <div className="bg-purple-600 rounded-2xl p-6 text-white shadow-lg flex items-center hover:bg-purple-700 transition duration-300 ease-in-out">
          <i className="fas fa-check-circle text-5xl mr-4"></i>
          <div>
            <div className="text-4xl font-bold">33</div>
            <p className="mt-2 text-sm">Completed Appointments</p>
          </div>
        </div>
      </div> */}
      <MobBarChart />
      {/* Charts Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 py-6">
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <BarCharts />
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <CircleChart />
        </div>
      </div>
    </div>
  );
}
