import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchQuery(value);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img
              src="https://www.janardanresort.in/imgs/new_logo_small.png"
              alt="Janardan Resort Logo"
              className="h-10"
            />
            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive ? "text-orange-600" : "text-gray-600"
                      } hover:text-gray-800 transition duration-300`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive ? "text-orange-600" : "text-gray-600"
                      } hover:text-gray-800 transition duration-300`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactUs"
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive ? "text-orange-600" : "text-gray-600"
                      } hover:text-gray-800 transition duration-300`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={handleSearchChange}
                className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 md:w-64"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h1>{user ? user.name : ""}</h1>
            {isAuthenticated ? (
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                LogOut
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
