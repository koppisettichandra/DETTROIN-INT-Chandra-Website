import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="text-2xl font-bold text-blue-700">
          VVS
        </div>

        <ul className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (

            <li key={item.name}>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>

            </li>

          ))}

        </ul>

        <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Apply Now
        </button>

        <button className="md:hidden">
          <HiOutlineMenuAlt3 size={28} />
        </button>

      </nav>
    </header>
  );
}