import * as React from "react";
import { render } from "react-dom";

import { columns, data } from "./data";
import * as types from "./types";
import Table from "./Table";
import "./styles.css";
import {Tooble, ToobleWrapper,defaultState} from './tooble'

class Printer extends React.Component {
  render() {
    console.log(this.props);
    return (<div></div>)
  }
}

const WrappedPrinter = ToobleWrapper(Printer)



function App() {
  return (
    <div className="App">
      <div className="App-Content">
      <Tooble value={defaultState}>
        <WrappedPrinter />
      </Tooble>
       {/* <Table data={data} columns={columns} />  */}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
