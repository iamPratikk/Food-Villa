import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import userContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import stores from "./Utils/store";
import Cart from "./components/Cart";
import Toggle from "./components/Toggle";

// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Pratik Priyadarshi",
    email: "pratikpriyadarshi1998@gmail.com",
  });

  return (
    <>
      <Provider store={stores}>
        <userContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/toggle",
        element: <Toggle />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
