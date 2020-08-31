import React from "react";
import { ToastContainer } from "react-toastify";
import Global from "./styles/global";

import Routes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app">
      <Routes />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
      <Global />
    </div>
  );
}

export default App;
