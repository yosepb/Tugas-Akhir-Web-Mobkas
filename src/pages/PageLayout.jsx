import { Outlet } from "react-router-dom";
import WidgetNavbar from "../components/WidgetNavbar";

export default function PageLayout() {
  return (
    <>
      <WidgetNavbar />
      <Outlet />
    </>
  );
}
