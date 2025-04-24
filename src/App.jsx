import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import React from "react";
import HomePage from "./Pages/HomePage";
import ProductPreview from "./Pages/ProductPreview";
import CartPage from "./Pages/CartPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Preview from "./Components/Preview";
import OrderPage from "./Pages/OrderPage";
import VendorPage from "./Pages/VendorPage";
import WelcomePage from "./Pages/WelcomePage";
import ManagerPage from "./Pages/ManagerPage";
import Unauthorized from "./Pages/Unauthorized";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useAuth } from "./Components/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  //const [user, setUser] = useState(null);
  const { user, loading } = useAuth();

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={user ? <HomePage /> : <Navigate to="/welcome" />}
            />
            <Route
              path="/welcome"
              element={user ? <Navigate to="/" /> : <WelcomePage />}
            />
            <Route
              path="/vendor"
              element={
                <ProtectedRoute allowedTags={["vendor"]}>
                  <VendorPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manager"
              element={
                <ProtectedRoute allowedTags={["store-manager"]}>
                  <ManagerPage />
                </ProtectedRoute>
              }
            />
            <Route path="/preview/" element={<ProductPreview />} />
            <Route path="/preview/:id/*" element={<Preview />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
