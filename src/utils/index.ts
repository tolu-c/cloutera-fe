import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BaseParams, FormatAmountOptions } from "@/types";
import { DateTimeFormat } from "@/types/enums";

dayjs.extend(relativeTime);

export const generateQueryString = (params: BaseParams): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value.toString());
    }
  });

  return searchParams.toString();
};

export const appendQueryString = (
  url: string,
  queryString?: string,
): string => {
  return queryString ? `${url}?${queryString}` : url;
};

export const appendQueryParams = (url: string, params: BaseParams): string => {
  const queryString = generateQueryString(params);
  return appendQueryString(url, queryString);
};

export function formatAmount(
  amount: number,
  options: FormatAmountOptions = {},
): string {
  const {
    currency = "NGN",
    locale = "en-NG",
    decimalPlaces = 2,
    showCurrencySymbol = true,
  } = options;

  // Ensure amount is a number and handle invalid inputs
  if (isNaN(amount)) {
    return "0.00"; // Fallback for invalid numbers
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: showCurrencySymbol ? "currency" : "decimal",
    currency: showCurrencySymbol ? currency : undefined,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });

  return formatter.format(amount);
}

export function formatNumber(number: number): string {
  if (isNaN(number)) {
    return "0"; // Fallback for invalid numbers
  }
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export const formatDateTime = (
  date: Date | string,
  format: DateTimeFormat,
): string => {
  const formattedDate = dayjs(date);
  if (!formattedDate.isValid()) {
    return "";
  }
  return formattedDate.format(format);
};

export const formatRelativeTime = (date: Date | string) => {
  return dayjs(date).fromNow();
};
