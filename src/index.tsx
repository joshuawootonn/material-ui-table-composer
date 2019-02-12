import * as React from "react";
import { render } from "react-dom";

import { columns, data } from "./data";
import * as types from "./types";
import Table from "./Table";
import "./styles.css";
import asdf from './contextExample'

function App() {
  return (
    <div className="App">
      <div className="App-Content">
       <Table data={data} columns={columns} /> 
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
