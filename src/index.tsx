import * as React from "react";
import { render } from "react-dom";

import { columns, data } from "./data";
import * as types from "./types";
import Table from "./Table";
import { ThemeToggler, Title } from "./contextExample";
import "./styles.css";

//<Table data={data} columns={columns} />
function App() {
  return (
    <div className="App">
      <div className="App-Content">
        <ThemeToggler>
          <Title> asdf< /Title>
        </ThemeToggler>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
