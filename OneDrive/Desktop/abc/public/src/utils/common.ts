import * as changeCase from "change-case";
import { TRemoveEmptyKeys } from "src/types/table";

interface IExactMatch {
  status?: number;
  gender?: string;
}

interface IDateRange {
  start?: string;
  end?: string;
}

interface ISort {
  name?: string;
  price?: string;
  status?: string;
  createdAt?: string;
}

interface ISearch {
  name?: string;
}

interface IPagination {
  page?: number;
  pageSize?: number;
}

interface IQueryString {
  exactMatch?: IExactMatch;
  range?: { date?: IDateRange; };
  sort?: ISort;
  search?: ISearch;
  pagination?: IPagination;
  page?: number;
  pageSize?: number;
}

function handlePagination(pagination: IPagination): string {
  const { page, pageSize } = pagination;
  if (page !== undefined && pageSize !== undefined) {
    return `page=${encodeURIComponent(page)}&pageSize=${encodeURIComponent(pageSize)}&`;
  }
  return '';
}

export function generateQueryString(data: IQueryString): string {
  let query = '';

  function buildQuery(obj: any, prefix = '') {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const newPrefix = prefix ? `${prefix}[${encodeURIComponent(key)}]` : encodeURIComponent(key);
        if (value !== undefined && value !== null) {
          if (typeof value === 'object') {
            buildQuery(value, newPrefix);
          } else {
            query += `${newPrefix}=${encodeURIComponent(value.toString())}&`;
          }
        }
      }
    }
  }

  buildQuery(data);
  return query.slice(0, -1);
}


export const convertToCapitalCase = (value: string = '') => changeCase.capitalCase(value);
export const convertToCapitalizeCase = (value: string = '') => {
  return value.toUpperCase();
};

export const removeEmptyKeys = async <T extends Record<string, any>>(
  obj: T
): Promise<TRemoveEmptyKeys<T>> => {
  const result: any = {} as TRemoveEmptyKeys<T>;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
        if (typeof obj[key] === 'object') {
          const cleanedSubObject = await removeEmptyKeys(obj[key]);
          if (Object.keys(cleanedSubObject).length > 0) {
            result[key] = cleanedSubObject;
          }
        } else {
          result[key] = obj[key] as TRemoveEmptyKeys<T>[keyof T];
        }
      }
    }
  }

  return result;
};


const EMPTY_VALUE = '--';
export const handleEmptyValue = <T>(value: T | string): T | string => {
  if (!value || value === undefined) {
    return EMPTY_VALUE as T | string;
  }
  return value;
};

export const mapUrl = `http://maps.google.com/?q=`;
