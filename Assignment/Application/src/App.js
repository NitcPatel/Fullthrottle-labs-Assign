import React, { Component } from "react";
import Config from "./config";
import ListTable from './components/Listtable/ListTable'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // init config based on development or production
    Config.init();
  }
  render() {
    return (
      <div>
        <ListTable />
      </div>
    );
  }
}

export default App;
