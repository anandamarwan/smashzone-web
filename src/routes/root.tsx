import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/header";

export function RootRoute() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}
