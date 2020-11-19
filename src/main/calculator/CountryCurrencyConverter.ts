import { currency_and_countries as currencyList } from "./CurrencySelector";

export interface CurrencyObject {
  CountriesUsing: string[];
  CountryCodes: string[];
  CurrencyCode: string;
  CurrencyName: string;
}

export let findCountryFromCurrencyCode: (
  currencyCode: string
) => CurrencyObject = function (currencyCode) {
  return currencyList.find((x) => x.CurrencyCode == currencyCode);
};

export let findCurrencyCodeFromCountryCode: (
  currencyCode: string
) => CurrencyObject = function (countryCode) {
  return currencyList.find((cur) => cur.CountryCodes.includes(countryCode));
};

export function concatenateCountryCodes(from, to) {
  let fullList = [];
  if (from.hasOwnProperty("CountryCodes")) {
    fullList = fullList.concat(from.CountryCodes);
  }
  if (to.hasOwnProperty("CountryCodes")) {
    fullList = fullList.concat(to.CountryCodes);
  }
  return fullList;
}
