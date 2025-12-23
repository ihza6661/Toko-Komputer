import { WHATSAPP_NUMBERS } from "./constants";

export type ShiftType = "morning" | "afternoon" | "closed";

export interface ShiftInfo {
  type: ShiftType;
  adminNumber: string;
  adminName: string;
  timeRange: string;
  isOperating: boolean;
  dayType: "weekday" | "saturday" | "sunday";
}

// Enhanced shift configuration with day-specific rules
export const SHIFT_CONFIG = {
  weekday: {
    // Monday - Friday: 08:00 - 20:00
    morning: {
      start: 8, // 08:00
      end: 14, // 14:00
      adminNumber: WHATSAPP_NUMBERS.owner, // Admin 1 - 08115757717
      adminName: "Admin Pagi",
      timeRange: "08:00 - 14:00",
    },
    afternoon: {
      start: 14, // 14:00
      end: 20, // 20:00
      adminNumber: WHATSAPP_NUMBERS.general, // Admin 2 - 08115757716
      adminName: "Admin Siang",
      timeRange: "14:00 - 20:00",
    },
  },
  saturday: {
    // Saturday: 08:00 - 18:00 (shorter afternoon shift)
    morning: {
      start: 8, // 08:00
      end: 13, // 13:00
      adminNumber: WHATSAPP_NUMBERS.owner, // Admin 1 - 08115757717
      adminName: "Admin Pagi",
      timeRange: "08:00 - 13:00",
    },
    afternoon: {
      start: 13, // 13:00
      end: 18, // 18:00
      adminNumber: WHATSAPP_NUMBERS.general, // Admin 2 - 08115757716
      adminName: "Admin Siang",
      timeRange: "13:00 - 18:00",
    },
  },
  sunday: {
    // Sunday: 09:00 - 18:00 (full day Admin 2, shorter hours)
    fullday: {
      start: 9, // 09:00
      end: 18, // 18:00
      adminNumber: WHATSAPP_NUMBERS.general, // Admin 2 - 08115757716
      adminName: "Admin Siang",
      timeRange: "09:00 - 18:00",
    },
  },
  timezone: "Asia/Pontianak", // WIB (GMT+7)
} as const;

/**
 * Get current time in WIB (Pontianak timezone)
 * Returns { hour, minute, day }
 */
function getCurrentTimeWIB(): { hour: number; minute: number; day: number } {
  const now = new Date();
  
  // Convert to WIB (GMT+7)
  // Get UTC time and add 7 hours
  const utcHour = now.getUTCHours();
  const utcMinute = now.getUTCMinutes();
  const utcDay = now.getUTCDay();
  
  let wibHour = utcHour + 7;
  let wibDay = utcDay;
  
  // Handle day overflow
  if (wibHour >= 24) {
    wibHour -= 24;
    wibDay = (wibDay + 1) % 7;
  }
  
  return {
    hour: wibHour,
    minute: utcMinute,
    day: wibDay,
  };
}

/**
 * Get day type for shift configuration
 */
function getDayType(day: number): "weekday" | "saturday" | "sunday" {
  if (day === 0) return "sunday";
  if (day === 6) return "saturday";
  return "weekday";
}

/**
 * Determine current shift based on time with day-specific logic
 */
export function getCurrentShift(): ShiftType {
  const { hour, minute, day } = getCurrentTimeWIB();
  const dayType = getDayType(day);
  
  // Convert time to decimal (e.g., 14:30 = 14.5)
  const currentTime = hour + minute / 60;
  
  // Handle Sunday - full day Admin 2
  if (dayType === "sunday") {
    const sundayConfig = SHIFT_CONFIG.sunday.fullday;
    if (currentTime >= sundayConfig.start && currentTime < sundayConfig.end) {
      return "afternoon"; // Sunday uses afternoon admin
    }
    return "closed";
  }
  
  // Handle Saturday - shorter hours
  if (dayType === "saturday") {
    const satConfig = SHIFT_CONFIG.saturday;
    
    if (currentTime >= satConfig.morning.start && currentTime < satConfig.morning.end) {
      return "morning";
    }
    
    if (currentTime >= satConfig.afternoon.start && currentTime < satConfig.afternoon.end) {
      return "afternoon";
    }
    
    return "closed";
  }
  
  // Handle Weekday (Monday - Friday)
  const weekdayConfig = SHIFT_CONFIG.weekday;
  
  if (currentTime >= weekdayConfig.morning.start && currentTime < weekdayConfig.morning.end) {
    return "morning";
  }
  
  if (currentTime >= weekdayConfig.afternoon.start && currentTime < weekdayConfig.afternoon.end) {
    return "afternoon";
  }
  
  // Outside operating hours
  return "closed";
}

/**
 * Get active admin WhatsApp number based on current time
 * Falls back to afternoon admin if closed
 */
export function getActiveAdminNumber(): string {
  const shift = getCurrentShift();
  const { day } = getCurrentTimeWIB();
  const dayType = getDayType(day);
  
  if (shift === "closed") {
    // Fallback to afternoon admin (last shift)
    return WHATSAPP_NUMBERS.general;
  }
  
  // Sunday always uses afternoon admin
  if (dayType === "sunday") {
    return SHIFT_CONFIG.sunday.fullday.adminNumber;
  }
  
  // Saturday shift selection
  if (dayType === "saturday") {
    if (shift === "morning") {
      return SHIFT_CONFIG.saturday.morning.adminNumber;
    }
    return SHIFT_CONFIG.saturday.afternoon.adminNumber;
  }
  
  // Weekday shift selection
  if (shift === "morning") {
    return SHIFT_CONFIG.weekday.morning.adminNumber;
  }
  
  return SHIFT_CONFIG.weekday.afternoon.adminNumber;
}

/**
 * Get detailed shift information
 * Useful for UI display
 */
export function getShiftInfo(): ShiftInfo {
  const shift = getCurrentShift();
  const { day } = getCurrentTimeWIB();
  const dayType = getDayType(day);
  const isOperating = shift !== "closed";
  
  // Sunday handling
  if (dayType === "sunday") {
    const sundayConfig = SHIFT_CONFIG.sunday.fullday;
    return {
      type: isOperating ? "afternoon" : "closed",
      adminNumber: sundayConfig.adminNumber,
      adminName: sundayConfig.adminName,
      timeRange: sundayConfig.timeRange,
      isOperating,
      dayType: "sunday",
    };
  }
  
  // Saturday handling
  if (dayType === "saturday") {
    if (shift === "morning") {
      const config = SHIFT_CONFIG.saturday.morning;
      return {
        type: "morning",
        adminNumber: config.adminNumber,
        adminName: config.adminName,
        timeRange: config.timeRange,
        isOperating: true,
        dayType: "saturday",
      };
    }
    
    if (shift === "afternoon") {
      const config = SHIFT_CONFIG.saturday.afternoon;
      return {
        type: "afternoon",
        adminNumber: config.adminNumber,
        adminName: config.adminName,
        timeRange: config.timeRange,
        isOperating: true,
        dayType: "saturday",
      };
    }
    
    // Closed - return Saturday afternoon as fallback
    const config = SHIFT_CONFIG.saturday.afternoon;
    return {
      type: "closed",
      adminNumber: config.adminNumber,
      adminName: config.adminName,
      timeRange: "Sabtu: 08:00 - 18:00",
      isOperating: false,
      dayType: "saturday",
    };
  }
  
  // Weekday handling (Monday - Friday)
  if (shift === "morning") {
    const config = SHIFT_CONFIG.weekday.morning;
    return {
      type: "morning",
      adminNumber: config.adminNumber,
      adminName: config.adminName,
      timeRange: config.timeRange,
      isOperating: true,
      dayType: "weekday",
    };
  }
  
  if (shift === "afternoon") {
    const config = SHIFT_CONFIG.weekday.afternoon;
    return {
      type: "afternoon",
      adminNumber: config.adminNumber,
      adminName: config.adminName,
      timeRange: config.timeRange,
      isOperating: true,
      dayType: "weekday",
    };
  }
  
  // Closed - return weekday afternoon as fallback
  const config = SHIFT_CONFIG.weekday.afternoon;
  return {
    type: "closed",
    adminNumber: config.adminNumber,
    adminName: config.adminName,
    timeRange: "Senin - Jumat: 08:00 - 20:00",
    isOperating: false,
    dayType: "weekday",
  };
}

/**
 * Get shift status message for display
 */
export function getShiftStatusMessage(): string {
  const shiftInfo = getShiftInfo();
  
  if (!shiftInfo.isOperating) {
    return "Toko Tutup - Pesan akan dibalas saat jam operasional";
  }
  
  if (shiftInfo.dayType === "sunday") {
    return `${shiftInfo.adminName} Aktif (Minggu)`;
  }
  
  return `${shiftInfo.adminName} Aktif`;
}

/**
 * Check if store is currently open
 */
export function isStoreOpen(): boolean {
  return getCurrentShift() !== "closed";
}

/**
 * Get day name in Indonesian
 */
export function getCurrentDayName(): string {
  const { day } = getCurrentTimeWIB();
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[day];
}

/**
 * Get formatted current time in WIB
 */
export function getCurrentTimeFormatted(): string {
  const { hour, minute } = getCurrentTimeWIB();
  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} WIB`;
}
