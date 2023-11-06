import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
// import DarkMode from "../components/DarkMode";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li></li>
      <li className="text-lg font-medium text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-medium text-white">
        <NavLink to="/addBlog">Add Blog</NavLink>
      </li>
      <li className="text-lg font-medium text-white">
        <NavLink to="/allBlogs">All Blogs</NavLink>
      </li>
      <li className="text-lg font-medium text-white">
        <NavLink to="/featuredBlogs">Featured Blogs</NavLink>
      </li>
      <li className="text-lg font-medium text-white">
        <NavLink to={`/wishlist/${user?.email}`}>Wishlist</NavLink>
      </li>
      <li className="text-lg font-medium text-white">
        <NavLink to="/login">Login</NavLink>
      </li>
      {/* <li className="text-lg font-medium text-white">
        <DarkMode></DarkMode>
      </li> */}
    </>
  );

  return (
    <nav className="bg-gray-500">
      <div className="navbar container mx-auto mb-10 py-10">
        <div className="navbar-start">
          <div className="dropdown dropdown-start">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="items-center mr-2">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/2hXPm1h/e6c16c6fdc213eae670cae97c487582ad720f85e-351x351.png"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 lg:hidden"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-teal-500 font-bold text-4xl pl-12 md:pl-44 lg:pl-0">
            King Of Tech
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <Link to="/">
                    <button
                      className="btn btn-sm  btn-ghost"
                      onClick={logOutUser}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-sm  btn-ghost">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
