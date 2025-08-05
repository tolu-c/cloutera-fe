import { BaseParams } from "@/types";

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
