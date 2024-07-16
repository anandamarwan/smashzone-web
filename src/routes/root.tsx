import { Outlet } from "react-router-dom";
import { Header } from "../components/shared/header";
import { Footer } from "../components/shared/footer";

export function RootRoute() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
