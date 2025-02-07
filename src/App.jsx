import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import ProductPreview from "./Pages/ProductPreview";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Preview from "./Components/Preview";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview/" element={<ProductPreview />} />
          <Route path="/preview/:id/*" element={<Preview />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
