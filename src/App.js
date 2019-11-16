import React, { Component, lazy, Suspense } from "react";
import "./styles/App.css";

const Text = lazy(() => import("./components/Dommy"));

class App extends Component {
  render() {
    return (
      <div style={{ margin: 30, padding: 30 }}>
        <div style={{ fontSize: 30, fontWeight: "bold" }}>
          React Lazy Loading and Suspense!
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <p>
            <Text />
          </p>
        </Suspense>
      </div>
    );
  }
}

export default App;
