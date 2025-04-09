import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const appointments = [
  {
    id: "01",
    service: "Service A",
    consumer: "Sophia Bennett",
    location: "15 Greenway Street, New York, NY 10001",
    status: "Pending",
  },
  {
    id: "02",
    service: "Service B",
    consumer: "Daniel Foster",
    location: "27 Maple Avenue, Los Angeles, CA 90012",
    status: "Waiting",
  },
  {
    id: "03",
    service: "Service C",
    consumer: "Michael Reynolds",
    location: "89 River Road, Miami, FL 33301",
    status: "Completed",
  },
  {
    id: "04",
    service: "Service D",
    consumer: "Emma Collins",
    location: "101 Sunset Boulevard, San Francisco, CA 94110",
    status: "Waiting",
  },
  {
    id: "05",
    service: "Service E",
    consumer: "John Carter",
    location: "34 Hilltop Drive, Chicago, IL 60614",
    status: "Completed",
  },
];

export function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Dashboard Overview
      </h1>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-md flex items-center">
          <i className="fas fa-calendar-alt text-5xl mr-4"></i>
          <div>
            <div className="text-4xl font-bold">04</div>
            <p className="mt-2 text-sm opacity-90">Recent Appointments</p>
          </div>
        </div>

        <div className="rounded-2xl bg-red-600 p-6 text-white shadow-md flex items-center">
          <i className="fas fa-clock text-5xl mr-4"></i>
          <div>
            <div className="text-4xl font-bold">02</div>
            <p className="mt-2 text-sm">Running Appointments</p>
          </div>
        </div>

        <div className="rounded-2xl bg-purple-600 p-6 text-white shadow-md flex items-center">
          <i className="fas fa-check-circle text-5xl mr-4"></i>
          <div>
            <div className="text-4xl font-bold">33</div>
            <p className="mt-2 text-sm">Completed Appointments</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border bg-white shadow-sm  mx-auto w-full">
        <Table>
          <TableHeader className="bg-sky-500 text-white">
            <TableRow>
              <TableHead className="text-white px-6 py-4">No</TableHead>
              <TableHead className="text-white px-6 py-4">Service</TableHead>
              <TableHead className="text-white px-6 py-4">
                Consumer Name
              </TableHead>
              <TableHead className="text-white px-6 py-4">Location</TableHead>
              <TableHead className="text-white px-6 py-4">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4">{appointment.id}</TableCell>
                <TableCell className="px-6 py-4">
                  {appointment.service}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {appointment.consumer}
                </TableCell>
                <TableCell className="px-6 py-4 max-w-xs truncate">
                  {appointment.location}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <span
                    className={cn(
                      "inline-block rounded-full px-3 py-1 text-xs font-semibold",
                      {
                        "bg-yellow-200 text-yellow-800":
                          appointment.status === "Pending",
                        "bg-blue-200 text-blue-800":
                          appointment.status === "Waiting",
                        "bg-green-200 text-green-800":
                          appointment.status === "Completed",
                      }
                    )}
                  >
                    {appointment.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdminDashboard;
