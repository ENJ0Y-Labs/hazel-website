import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <Link className="brand" to="/">HAZEL<span>.</span></Link>
        <p>© {new Date().getFullYear()} Hazel PR Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
