import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export function getDateByFormat(date: Date, formatPattern: string, shouldUseLocalTz = false, timeZone = ''): string {
  try {
    if (shouldUseLocalTz) {
      return formatInTimeZone(date, timeZone, formatPattern);
    } else {
      return format(date, formatPattern);
    }
  } catch {
    return '...';
  }
}

export function formatFullDate(date: Date, shouldUseLocalTz = false, timeZone = '') {
  try {
    if (shouldUseLocalTz) {
      return formatInTimeZone(date, timeZone, 'dd/MM/yyyy');
    } else {
      return format(date, 'dd/MM/yyyy');
    }
  } catch {
    return '...';
  }
}

export function getCurrentTimezone(shouldUseLocalTz = false, timeZone = '') {
  try {
    if (shouldUseLocalTz) {
      return formatInTimeZone(new Date(), timeZone, 'zzzz');
    } else {
      return format(new Date(), 'zzzz');
    }
  } catch {
    return '...';
  }
}
