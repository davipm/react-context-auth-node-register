import React from "react";
import { ToastContainer } from "react-toastify";
import Global from "./styles/Global";

import Routes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app">
      <Routes />
      <Footer />

      <ToastContainer />
      <Global />
    </div>
  );
}

export default App;
