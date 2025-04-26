import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/posts">
        Posts
      </NavLink>
      <NavLink className="navigation__link" to="/add-post">
        Crear Post
      </NavLink>
    </nav>
  );
};

export default Navigation;
