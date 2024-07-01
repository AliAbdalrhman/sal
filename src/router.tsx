import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import AuthGaurd from "./components/gaurds/AuthGaurd";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthGaurd />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
);
