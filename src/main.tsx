import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@babel/polyfill';
import AppRoutes from "./AppRoutes";
//import HomepageParalax from "./pages/HomepageParalax";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <AppRoutes />
);
