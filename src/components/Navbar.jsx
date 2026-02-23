import logo5tar from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar fixed top-0 z-50 shadow-md w-full bg-neutral text-neutral-content px-4">
      {/*  Logo & Hamburger Menu  */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Menu Dropdown  */}
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-1 p-2 shadow bg-neutral rounded-box w-52 border border-amber-600  "
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <img
          src={logo5tar}
          className="h-15 w-auto object-contain"
          alt="Logo 5TAR"
        />
      </div>

      {/* Navbar Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 ">
          <li>
            <a className="btn btn-ghost hover:bg-amber-600">Home</a>
          </li>
          <li>
            <a className="btn btn-ghost hover:bg-amber-600">About</a>
          </li>
          <li>
            <a className="btn btn-ghost  hover:bg-amber-600">Gallery</a>
          </li>
          <li>
            <a className="btn btn-ghost  hover:bg-amber-600">Contact</a>
          </li>
        </ul>
      </div>

      {/*Button Login */}
      <div className="navbar-end">
        <a className="btn btn-primary">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
