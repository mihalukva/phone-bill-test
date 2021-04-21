import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { callBill } from "./mocks/callBill";
import { Call } from "./lib/call";
import { CallList } from "./lib/callList";
import  SelectFile  from "./components/selectFile";
function parseBill(bill: string) {
  let regexp = /\d\d:\d\d:\d\d,\d\d\d-\d\d\d-\d\d\d/g;
  let callListStr: any = bill.match(regexp);
  const callListArr: Array<Call> = callListStr.map((item: string) => {
    return new Call(item);
  });
  const callList: CallList = new CallList(callListArr);
  console.log(callList.totalCost());
}

function App() {
  parseBill(callBill);
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <SelectFile />
    </div>
  );
}

export default App;
