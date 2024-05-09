import { format, parse, type Locale, formatISO, addYears } from 'date-fns';
import locale from 'date-fns/locale/en-US';

const formatDistanceLocale: Record<string, string> = {
  lessThanXSeconds: '{{count}}s',
  xSeconds: '{{count}}s',
  halfAMinute: '30s',
  lessThanXMinutes: '{{count}}m',
  xMinutes: '{{count}}m',
  aboutXHours: '{{count}}h',
  xHours: '{{count}}h',
  xDays: '{{count}}d',
  aboutXWeeks: '{{count}}w',
  xWeeks: '{{count}}w',
  aboutXMonths: '{{count}}m',
  xMonths: '{{count}}m',
  aboutXYears: '{{count}}y',
  xYears: '{{count}}y',
  overXYears: '{{count}}y',
  almostXYears: '{{count}}y',
};

export const customLocale: Locale = {
  ...locale,
  formatDistance: (token, count, options) => {
    options = options || {};

    const result = formatDistanceLocale[token].replace('{{count}}', count);

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  },
};

export const enum DateFormats {
  standard = 'MM/dd/yyyy',
  moreReadable = 'MMM-dd-yyyy',
  iso = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  standardYear = 'yyyy',
  usa = 'MM/dd/yyyy',
}
export const enum TimeFormats {
  standardTime = 'HH:mm:ss',
  TimeWithTimezone = "hh:mm aa",
}

export const formats = {
  standard: DateFormats.standard,
  standardTime: TimeFormats.standardTime,
  timeWithTimezone: TimeFormats.TimeWithTimezone,
  moreReadable: DateFormats.moreReadable,
  iso: DateFormats.iso,

};

type TDateFormats = DateFormats.standard | DateFormats.moreReadable;
type TTimeFormats = TimeFormats.standardTime | TimeFormats.TimeWithTimezone;


const isValidISODateTime = (dateTimeString: string) => {
  return !isNaN(Date.parse(dateTimeString));
};

export const splitDateTime = (isoDateTime: string = '', dateFormat?: TDateFormats, timeFormat?: TTimeFormats) => {
  if (!isValidISODateTime(isoDateTime)) {
    // Handle invalid input gracefully, such as returning an error message or throwing an exception
    return { error: 'Invalid ISO datetime format' };
  }
  const parsedDate = parse(isoDateTime, formats.iso, new Date());
  const date = dateFormat && format(parsedDate, dateFormat);
  const time = timeFormat && format(parsedDate, timeFormat);
  return { date, time };
};

export const formatToISO = (date: Date | null) => {
  return date ? formatISO(date) : '';
};

export const enum YearDirection {
  Past = 'past',
  Future = 'future',
}

type TYearDirection = YearDirection.Past | YearDirection.Future;

export const getYearList = (yearCount: number, direction: TYearDirection = YearDirection.Past) => {
  const currentDate = new Date();
  const increment = direction !== YearDirection.Past ? 1 : -1;
  return Array.from({ length: yearCount }, (_, index) => {
    const year = format(addYears(currentDate, increment * index), DateFormats.standardYear);
    return { label: year, value: year };
  });

};



export const getFormatedDate = (currentDate: string, currentDateFormat: string, convertDateFormat?: string): string => {
  const parsedDate: Date = parse(currentDate, currentDateFormat, new Date());
  const usaDate = format(parsedDate, convertDateFormat ?? DateFormats.standard);
  return usaDate;
};

