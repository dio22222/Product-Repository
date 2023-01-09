import { NavLink, Outlet, useLocation } from "react-router-dom"
import NavButtons from '../NavButtons'

const RootLayout = () => {
  let currentPath = useLocation()

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavButtons path={currentPath.pathname}/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout
