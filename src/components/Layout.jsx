import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 Kasa</p>
      </footer>
    </>
  );
}

export default Layout;
