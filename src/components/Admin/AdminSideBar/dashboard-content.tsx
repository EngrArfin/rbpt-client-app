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

export function DashboardContent() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-xl font-semibold">Overview</h1>

      <div className="mb-8 grid grid-cols-3 gap-6">
        <div className="rounded-lg bg-[#1B8D1B] p-6 text-white">
          <div className="text-5xl font-bold">04</div>
          <p className="mt-2 text-sm">Recent Appointment List</p>
        </div>
        <div className="rounded-lg bg-green-50 p-6 text-[#1B8D1B]">
          <div className="text-5xl font-bold">02</div>
          <p className="mt-2 text-sm">Running Appointment List</p>
        </div>
        <div className="rounded-lg bg-green-50 p-6 text-[#1B8D1B]">
          <div className="text-5xl font-bold">33</div>
          <p className="mt-2 text-sm">Completed Appointment List</p>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader className="w-[894px] h-[74px] bg-green-500 text-white rounded-lg px-[24px] pr-[34px] pb-[24px] gap-[24px]">
            <TableRow className=" ">
              <TableHead>No</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Consumer Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.id}</TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.consumer}</TableCell>
                <TableCell className="max-w-[300px] truncate">
                  {appointment.location}
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-block rounded-full px-3 py-1 text-xs font-medium",
                      {
                        "bg-yellow-100 text-yellow-800":
                          appointment.status === "Pending",
                        "bg-blue-100 text-blue-800":
                          appointment.status === "Waiting",
                        "bg-green-100 text-green-800":
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
