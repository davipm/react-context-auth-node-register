import React from "react";
import { ToastContainer } from 'react-toastify';

import Routes from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app">
      <Routes />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
