import { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClient, QueryClientProvider } from "react-query";
import Loading from "./Ui/Components/Common/Loading/Loading";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { AuthenticationContext } from "src/Core/Context/AuthenticationContext";
import App from "./App";
import HelmetProvider from "./Core/Context/helmetProvider";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense
    fallback={
      <h3>
        <Loading />
      </h3>
    }
  >
    <AuthenticationContext>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
        <ToastContainer />
      </QueryClientProvider>
    </AuthenticationContext>
  </Suspense>
);
