import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and title */}
        <div className="flex items-center">
          <img
            src="https://i.imgur.com/your-logo-link.png"
            alt="School Logo"
            className="h-12 w-12 mr-3"
          />
          <div>
            <h1 className="text-white text-xl font-bold">Matikumra High School</h1>
            <p className="text-white text-sm">Jhikorgasa, Jessore</p>
          </div>
        </div>

        {/* Right side: Links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          <Link to="/about" className="text-white hover:text-yellow-300">About</Link>
          <Link to="/academic" className="text-white hover:text-yellow-300">Academics</Link>
          <Link to="/admission" className="text-white hover:text-yellow-300">Result</Link>
          <Link to="/teachers" className="text-white hover:text-yellow-300">About Teachers</Link>
          <button className="btn btn-sm bg-red-500 text-white">Apps Download</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <label htmlFor="menu-toggle" className="btn btn-square btn-ghost text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <div className="md:hidden" id="menu">
        <ul className="p-4 bg-green-500 space-y-2">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-yellow-300">About</Link>
          </li>
          <li>
            <Link to="/academic" className="text-white hover:text-yellow-300">Academics</Link>
          </li>
          <li>
            <Link to="/admission" className="text-white hover:text-yellow-300">Result</Link>
          </li>
          <li>
            <Link to="/teachers" className="text-white hover:text-yellow-300">About Teachers</Link>
          </li>
          <li>
            <button className="btn bg-red-500 text-white w-full">Apps Download</button>
          </li>
        </ul>
      </div>

      {/* Toggle Menu Visibility */}
      <style>
        {`
          #menu-toggle:checked + #menu {
            display: block;
          }
          #menu {
            display: none;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
