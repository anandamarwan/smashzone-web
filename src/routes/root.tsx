import { Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <div>
      <header>HEADER</header>

      <main>
        <Outlet />
      </main>

      <footer>FOOTER</footer>
    </div>
  );
}
