import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";



const clerkFrontendApi = "pk_test_cXVhbGl0eS1ncmFja2xlLTcuY2xlcmsuYWNjb3VudHMuZGV2JA"; // Replace with your actual Clerk Frontend API

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkFrontendApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
