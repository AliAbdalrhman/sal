import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Login from "./pages/Login";
import AuthGaurd from "./components/gaurds/AuthGaurd";
// import Home from "./pages/Home";
import Auth from "./pages/Auth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthGaurd />}>
        <Route index element={<Auth />} />
      </Route>
      {/* <Route path="/login" element={<Login />} /> */}
    </>
  )
);
