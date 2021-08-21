import React from "react";

//Navigation
import AppRouter from "./router/Router";
import {BrowserRouter} from 'react-router-dom';
import {Layout} from "./utility/context/Layout"

export default function App() {

  return (
      <BrowserRouter>
          <Layout>
            <AppRouter/>
          </Layout>
      </BrowserRouter>
  );
}
