import { useState } from "react";
import "./App.scss";
import SelectFile from "./components/selectFile";
import IAggregatePhoneBill from "./interfaces/IAggregatePhoneBill";
import Table from "./components/billTable";
import uploadBill from "./services/uploadBill";

const aggregatePhoneBillDefault: IAggregatePhoneBill = {
  totalCallList: [],
  totalCost: 0,
};

function App() {
  const [table, setTable] = useState({ aggregatePhoneBill: aggregatePhoneBillDefault });
  function onUpload(file: any) {
    uploadBill(file).then((response: IAggregatePhoneBill) => {
      setTable({ aggregatePhoneBill: response });
    });
  }

  return (
    <div className="App">
      <header>
        <SelectFile onUpload={onUpload} />
      </header>
      <main>
        <Table list={table.aggregatePhoneBill.totalCallList} />

        <div className="alert alert-dark" role="alert">
          Total cost: {table.aggregatePhoneBill.totalCost} cents
        </div>
      </main>
    </div>
  );
}

export default App;
