import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import ProductDetails from "./Components/ProductDetail/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="nirdosh.us.auth0.com"
    clientId="sBWZsnYHNLbv2CNyBHtlFy4U1J677vIC"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {" "}
    <RouterProvider router={router} />
  </Auth0Provider>
);
