// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home.tsx";
import { Login } from "./Login/Login.tsx";
import { Signup } from "./Signup/Signup.tsx";
import { Market } from "./component/Market.tsx";
import { Asset } from "./component/Asset.tsx";
import { SwapComp } from "./component/SwapComp.tsx";
import { PtoP } from "./component/PtoP.tsx";
import { OrderBook } from "./component/OrderBook.tsx";
import { Chart } from "./component/Chart.tsx";
import { Spot } from "./component/Spot.tsx";
import { GetStarted } from "./component/GetStarted.tsx";
import { Navbar } from "./component/navbar/navbar/Navbar.tsx";
import { Footer } from "./component/footer/Footer.tsx";
import { SubHeaderComp } from "./component/navbar/navbar/SubHeaderComp.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { DepositeCrypto } from "./component/DepositeCrypto.tsx";
import { DepositDetailPage } from "./component/DepositDetailPage.tsx";
import { DepositView } from "./component/DepositView.tsx";
import { Withdrawal } from "./component/Withdrawal.tsx";
import { Finalwithdrawal } from "./component/Finalwithdrawal.tsx";

import { Otp } from "./Signup/otp.tsx";
import { ForgotPassword } from "./Login/forgot_password_1.tsx";
import { ForgotPasswordSuccess } from "./Login/forgot_password_2.tsx";
import { NewPassword } from "./Login/new_password.tsx";


let userToken = localStorage.getItem("userToken");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:( !userToken? <GetStarted />: <>
            <Navbar />
            <Home />
            <Footer />
          </> ),
      },
      { path: "/login", element: <Login /> },{
        path: "/otp",
        element: <Otp/>
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/forgot-password-success",
        element: <ForgotPasswordSuccess />
      },
      {
        path: "/new-password",
        element: <NewPassword />
      },
      { path: "/subHead", element: <SubHeaderComp /> },
      {
        path: "/signup",
        element: (
          <>
            <Signup />
            <Footer />
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        ),
      },
      {
        path: "/market",
        element: (
          <>
            <Navbar />
            <Market />
            <Footer />
          </>
        ),
      },
      {
        path: "/asset",
        element: (
          <>
            <Navbar />
            <Asset />
            <Footer />
          </>
        ),
      },
      {
        path: "/swap",
        element: (
          <>
            <Navbar />
            <SwapComp />
            <Footer />
          </>
        ),
      },
      {
        path: "/pp",
        element: (
          <>
            <Navbar />
            <PtoP />
            <Footer />
          </>
        ),
      },
      {
        path: "/spot",
        element: (
          <>
            <Navbar />
            <Spot />
            <Footer />
          </>
        ),
      },
      {
        path: "/orderbook",
        element: (
          <>
            <Navbar />
            <OrderBook />
            <Footer />
          </>
        ),
      },
      {
        path: "/depositdetails",
        element: <DepositeCrypto />,
      },
      {
        path: "/depositcrypto",
        element: <DepositDetailPage />,
      },
      {
        path: "/depositview",
        element: <DepositView />,
      },
      {
        path: "/withdrawal",
        element: <Withdrawal />,
      },
      {
        path: "/finalwithdrawal",
        element: <Finalwithdrawal />,
      },
      {
        path: "/chart",
        element: (
          <>
            <Navbar />
            <Chart />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);