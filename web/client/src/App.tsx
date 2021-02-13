import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import Global from "./styles/global";

import Routes from "./routes";
import Footer from "./container/Footer";

export default function App() {
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
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}
