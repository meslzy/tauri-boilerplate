import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return _jsx("div", { children: "Hello World!" });
    }
}
export default App;
