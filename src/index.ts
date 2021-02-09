import React from "react";
import { render } from "ink";
import { Creco } from "./creco";

const cli = {
  run() {
    render(React.createElement(Creco));
  },
};

export = cli;
