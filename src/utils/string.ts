/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes  */

export function isNumeric(num: any): boolean {
  return !num.isNaN;
}

export function getQueryParams(urlQuery: string): any {
  return JSON.parse(
    `{"${decodeURI(urlQuery)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`,
  );
}
