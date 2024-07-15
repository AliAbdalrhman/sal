import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
    </>
  );
}

export default UserLayout;
