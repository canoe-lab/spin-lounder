import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/spin-lounder/">HOME</Link>
        </li>
        <li>HOW IT WORKS</li>
        <li>DROPS</li>
        <li>FOR ARTISTS</li>
        <li>
          <Link to="/spin-lounder/creator-token-mint">BUY CREATOR TOKEN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
