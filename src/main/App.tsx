import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./app.scss";
import Calculator from "./calculator/Calculator";
import { useCounter } from "./store/store";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m-simplified.json";
export default function App() {
  const [state, { setDestinationCountry }] = useCounter();

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                tabIndex={-1}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
                className={
                  state.currency &&
                  state.currency.CountryCodes.includes(geo.properties.ISO_A2)
                    ? "highlight"
                    : ""
                }
                onClick={() => setDestinationCountry(geo)}
                key={geo.rsmKey}
                geography={geo}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <Calculator />
    </div>
  );
}
