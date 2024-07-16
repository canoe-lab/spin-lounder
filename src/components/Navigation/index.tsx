import { Link } from "react-router-dom";
import { CREATOR_TOKEN_MINT, HOME } from "../../Routes/routes";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={HOME}>HOME</Link>
        </li>
        <li>HOW IT WORKS</li>
        <li>DROPS</li>
        <li>FOR ARTISTS</li>
        <li>
          <Link to={CREATOR_TOKEN_MINT}>BUY CREATOR TOKEN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
