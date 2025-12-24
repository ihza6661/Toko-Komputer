import { Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { isStoreOpen, getCurrentDayName } from "@/lib/timeBasedRouting";
import { useState, useEffect } from "react";

interface DaySchedule {
  name: string;
  hours: string;
  isToday: boolean;
}

const OperatingHoursWidget = () => {
  const [storeOpen, setStoreOpen] = useState(() => isStoreOpen());
  const [currentDay, setCurrentDay] = useState(() => getCurrentDayName());

  useEffect(() => {
    // Update every minute to keep status current
    const interval = setInterval(() => {
      setStoreOpen(isStoreOpen());
      setCurrentDay(getCurrentDayName());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const schedule: DaySchedule[] = [
    {
      name: "Senin",
      hours: "08:00 - 20:00",
      isToday: currentDay === "Senin",
    },
    {
      name: "Selasa",
      hours: "08:00 - 20:00",
      isToday: currentDay === "Selasa",
    },
    {
      name: "Rabu",
      hours: "08:00 - 20:00",
      isToday: currentDay === "Rabu",
    },
    {
      name: "Kamis",
      hours: "08:00 - 20:00",
      isToday: currentDay === "Kamis",
    },
    {
      name: "Jumat",
      hours: "08:00 - 20:00",
      isToday: currentDay === "Jumat",
    },
    {
      name: "Sabtu",
      hours: "08:00 - 18:00",
      isToday: currentDay === "Sabtu",
    },
    {
      name: "Minggu",
      hours: "09:00 - 18:00",
      isToday: currentDay === "Minggu",
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-gray-700" />
        <h3 className="text-lg font-semibold text-foreground">Jam Operasional</h3>
      </div>

      {/* Current Status */}
      <div className="mb-6 flex items-center gap-3 rounded-lg bg-secondary p-3">
        <div
          className={`h-3 w-3 rounded-full ${
            storeOpen ? "bg-success/100 animate-pulse" : "bg-gray-400"
          }`}
        />
        <div className="flex-1">
          <span
            className={`text-sm font-semibold ${
              storeOpen ? "text-success" : "text-muted-foreground"
            }`}
          >
            {storeOpen ? "Buka Sekarang" : "Tutup Sekarang"}
          </span>
          <p className="text-xs text-gray-500 mt-0.5">
            {currentDay}, Database Computer Pontianak
          </p>
        </div>
      </div>

      {/* Schedule List */}
      <div className="space-y-2">
        {schedule.map((day) => (
          <div
            key={day.name}
            className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
              day.isToday
                ? "bg-primary/5 border border-primary/20 font-semibold text-primary"
                : "text-muted-foreground hover:bg-secondary"
            }`}
          >
            <span className="min-w-[80px]">{day.name}</span>
            <span className="font-mono text-xs">{day.hours}</span>
          </div>
        ))}
      </div>

      {/* Shift Info */}
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-xs text-gray-500 leading-relaxed">
          <span className="font-medium text-gray-700">Sistem Shift:</span>
          <br />
          • Senin-Jumat: Pagi (08:00-14:00) | Siang (14:00-20:00)
          <br />
          • Sabtu: Pagi (08:00-13:00) | Siang (13:00-18:00)
          <br />• Minggu: Admin Siang (09:00-18:00)
        </p>
      </div>
    </div>
  );
};

export default OperatingHoursWidget;
