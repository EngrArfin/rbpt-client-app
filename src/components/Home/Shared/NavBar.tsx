import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaLock,
} from "react-icons/fa";
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
      "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Hover Card",
    href: "/hover-card",
    description: "Preview content behind a link.",
  },
  {
    title: "Progress",
    href: "/progress",
    description: "Shows task completion progress.",
  },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold tracking-tight">MyApp</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <DropdownMenu title="Components" items={components} />
          <Link to="/docs" className="hover:text-gray-300">
            Documentation
          </Link>
        </div>

        {/* Search & Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none text-sm w-60"
          />
          <Link
            to="/cart"
            className="hover:text-gray-300 flex items-center gap-1"
          >
            <FaShoppingCart /> Cart
          </Link>
          <Link
            to="/user"
            className="hover:text-gray-300 flex items-center gap-1"
          >
            <FaUser /> User
          </Link>
          <Link
            to="/admin"
            className="hover:text-gray-300 flex items-center gap-1"
          >
            <FaUser /> Admin
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-gray-800 transition flex items-center gap-1"
          >
            <FaLock /> Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-6 space-y-4 bg-gray-900">
          <Link to="/" className="block hover:text-gray-300">
            Home
          </Link>
          <DropdownMenu title="Components" items={components} mobile />
          <Link to="/docs" className="block hover:text-gray-300">
            Documentation
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white text-sm"
          />
          <Link to="/cart" className="block hover:text-gray-300">
            🛒 Cart
          </Link>
          <Link to="/user" className="block hover:text-gray-300">
            👤 User
          </Link>
          <Link to="/admin" className="block hover:text-gray-300">
            👤 Admin
          </Link>
          <Link
            to="/login"
            className="block w-full text-center px-4 py-2 border border-white rounded-md hover:bg-white hover:text-gray-800 transition"
          >
            🔒 Login
          </Link>
        </div>
      )}
    </header>
  );
};

// Dropdown for Desktop & Mobile
const DropdownMenu: React.FC<{
  title: string;
  items: NavItem[];
  mobile?: boolean;
}> = ({ title, items, mobile = false }) => {
  if (mobile) {
    return (
      <div>
        <span className="font-semibold">{title}</span>
        <div className="ml-4 mt-2 space-y-1">
          {items.map((item) => (
            <Link
              to={item.href}
              key={item.title}
              className="block hover:text-gray-300 text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="hover:text-gray-300 transition-colors">{title}</button>
      <div className="absolute hidden group-hover:block bg-white text-black rounded-md shadow-lg mt-2 w-56 z-50">
        {items.map((item) => (
          <Link
            to={item.href}
            key={item.title}
            className="block p-3 border-b last:border-0 hover:bg-gray-100"
          >
            <p className="font-medium">{item.title}</p>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
