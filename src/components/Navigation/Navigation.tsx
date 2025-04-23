import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Posts
      </NavLink>
    </nav>
  );
};

export default Navigation;
