import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Login from "./pages/Login";
import AuthGaurd from "./components/gaurds/AuthGaurd";
// import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import GuestGaurd from "./components/gaurds/GuestGuard";
import UserLayout from "./components/layout/UserLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <AuthGaurd>
            <UserLayout />
          </AuthGaurd>
        }
      >
        <Route index element={<HomePage />} />
      </Route>
      <Route
        path="/auth"
        element={
          <GuestGaurd>
            <AuthPage />
          </GuestGaurd>
        }
      />
    </>
  )
);
