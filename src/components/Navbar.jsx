import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-xl font-bold">FOREVER</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/cart" className="relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* AUTH LINKS */}
          {user ? (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="text-sm underline"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 pb-4">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/cart" onClick={() => setOpen(false)}>
            Cart ({cartCount})
          </NavLink>

          {user ? (
            <>
              <span className="text-sm">Hi, {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="text-left underline"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" onClick={() => setOpen(false)}>
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
