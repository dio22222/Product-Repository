import { NavLink, Outlet, useLocation } from "react-router-dom"
import NavButtons from '../NavButtons'
import '../../assets/styles/Navbar.scss'

const RootLayout = () => {
  let currentPath = useLocation()

  return (
    <>
      <header>
        <nav className="navbar bg-primary" id="main-navigation">
          <h2 className="nav-logo">Product Repository</h2>
          <NavLink to="/" id="home-link">Home</NavLink>
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
