import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/hazel-security", label: "Hazel Security" },
  { to: "/clients", label: "Our Clients" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink className="brand" to="/" aria-label="Hazel PR Company home">
          HAZEL<span>.</span>
        </NavLink>
        <div className="nav-links">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
