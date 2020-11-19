import React, { useEffect, useState } from "react";
import { useCounter } from "../store/store";
import {
  CurrencyObject,
  findCurrencyCodeFromCountryCode,
} from "./CountryCurrencyConverter";

export default function Calculator() {
  const [state, { setSelectedCurrency }] = useCounter();

  const { currency } = state;

  //   const [currency, setcurrency] = useState<CurrencyObject | null>(null);

  console.log(state.destinationCountry);

  useEffect(() => {
    if (state.destinationCountry) {
      const currency = findCurrencyCodeFromCountryCode(
        state.destinationCountry.properties.ISO_A2
      );
      console.log(currency);
      setSelectedCurrency(currency);
    }
  }, [state]);

  return (
    <div>
      {state.destinationCountry && state.destinationCountry.properties.NAME}
      {currency && (
        <div>
          <div>Currency name: {currency.CurrencyName}</div>
          <div>Currency code: {currency.CurrencyCode}</div>
          <div>
            Countries using ({currency.CountriesUsing.length})
            {currency.CountriesUsing.map((e) => (
              <div key={e}>{e}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
