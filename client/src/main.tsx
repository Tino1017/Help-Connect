// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./sass/main.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./redux/store/student.store.ts";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { FetchUserDataProvider } from "./context/FetchUserData.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Provider store={store}>
      <BrowserRouter>
        <FetchUserDataProvider>
          <App />
        </FetchUserDataProvider>
      </BrowserRouter>
    </Provider>
  </>
  // </React.StrictMode>
);
