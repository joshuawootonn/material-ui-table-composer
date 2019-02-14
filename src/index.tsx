import * as React from "react";
import { render } from "react-dom";

import { columns, data } from "./data";
import * as types from "./types";
import Table from "./Table";
import "./styles.css";
import {Tooble} from './tooble'


function App() {
  return (
    <div className="App">
      <div className="App-Content">
      <Tooble data={data} columns={columns}>
        <Table 
        
        />
      </Tooble>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
