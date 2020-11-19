import { createStore, createHook } from "react-sweet-state";
import { CurrencyObject } from "../calculator/CountryCurrencyConverter";

interface IStore {
  destinationCountry: any;
  currency: CurrencyObject;
}
type Actions = typeof actions;

// actions that trigger store mutation

const actions = {
  setSelectedCurrency: (input) => ({ setState, getState }) => {
    setState({
      currency: input,
    });
  },
  setDestinationCountry: (country) => ({ setState, getState }) => {
    // mutate state synchronously
    setState({
      destinationCountry: country,
    });
  },
};

const Store = createStore<IStore, Actions>({
  // value of the store on initialisation
  initialState: {
    destinationCountry: null,
    currency: null,
  },
  actions,
});

export const useCounter = createHook(Store);
