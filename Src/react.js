import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestureantMenu from "./components/RestureantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./components/UserContext";
import reduxStore from "./utils/reduxStore";
import {Provider} from "react-redux";
import MyCart from "./components/MyCart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName ] = useState();

  useEffect(()=>{
    const data = {
      user: "naman rajput"
    }
    setUserName(data.user);
  },[]);



  return (
    <Provider store={reduxStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/cart",
        element: <MyCart/>,
      },
      {
        path: "/restureant/:resId",
        element: <RestureantMenu/>,
      },
    ],
    errorElement: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);