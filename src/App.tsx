import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns";

function App() {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="App">
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
}

export default App;
