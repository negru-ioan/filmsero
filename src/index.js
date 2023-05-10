import React from 'react';
import App from './App';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail'
import PopupProvider from "./context/PopupContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/filmsero/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/filmsero/:category/search/:keyword" element={<Catalog />} />
      <Route path="/filmsero/:category/:id" element={<Detail />} />
      <Route path="/filmsero/:category" element={<Catalog />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <PopupProvider>
      <RouterProvider router={router} />
    </PopupProvider>
  </React.StrictMode>
);