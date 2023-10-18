import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <>
      {/* <h1>Halaman Layout "/"</h1> */}
      <Outlet />
    </>
  );
}
