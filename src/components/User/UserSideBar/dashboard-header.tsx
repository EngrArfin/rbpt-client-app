import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex justify-between items-center h-16 gap-4 border-b px-6">
      <div className="p-6">
        <img
          src="https://energhx.com/wp-content/uploads/2022/09/logo.png"
          alt="ENERGHX"
          width={120}
          height={40}
          className="dark:invert"
        />
      </div>

      <div className="flex items-center justify-endh-16 gap-4  px-6">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJYO2z0aV3cT15IeV9_txuD04rcmJOVffuQD2WhH9OHs75WOyk=s288-c-no"
              alt="Profile picture"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="font-medium">Emmanuel Nonye(User)</p>
            <p className="text-xs text-[#1B8D1B]">Developer (Certified)</p>
          </div>
        </div>
      </div>
    </header>
  );
}
