import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/logo.png";

interface NavItem {
  title: string;
  href: string;
  description?: string;
}

const components: NavItem[] = [
  {
    title: "Alert Dialog",
    href: "/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-12 w-12" />
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex space-x-6">
        <NavItem title="Home" href="/" />
        <DropdownMenu title="Components" items={components} />
        <NavItem title="Documentation" href="/docs" />
      </ul>

      {/* Right Side: Search Bar, Cart, and Login Button */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
        />
        <Link to="/cart" className="text-white hover:text-gray-300">
          <i className="fas fa-shopping-cart"></i> Cart
        </Link>
        <Link to="/user" className="text-white hover:text-gray-300">
          <i className="fas fa-shopping-cart"></i> User
        </Link>
        <Link to="/admin" className="text-white hover:text-gray-300">
          <i className="fas fa-shopping-cart"></i> Admin
        </Link>
        <Link
          to="/signup"
          className="text-white hover:text-gray-300 px-4 py-2 rounded-md border border-white"
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="text-white hover:text-gray-300 px-4 py-2 rounded-md border border-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => (
  <li>
    <Link to={href} className="hover:text-gray-300 transition-colors">
      {title}
    </Link>
  </li>
);

const DropdownMenu: React.FC<{ title: string; items: NavItem[] }> = ({
  title,
  items,
}) => {
  return (
    <li className="relative group">
      <button className="hover:text-gray-300 transition-colors">{title}</button>
      <ul className="absolute hidden group-hover:block bg-white text-black rounded-md shadow-md mt-2 w-56">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-b last:border-0 p-2 hover:bg-gray-100"
          >
            <Link to={item.href} className="block p-2">
              <p className="font-medium">{item.title}</p>
              {item.description && (
                <p className="text-sm text-gray-500">{item.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavBar;
