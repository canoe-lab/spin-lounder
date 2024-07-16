import logo from "../../assets/logo.svg";
import Navigation from "../../components/Navigation";

//styles
import * as S from "../styles";
import HeaderButtonContainer from "./features/HeaderButtonContainer";

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <img src={logo} />
      </S.Logo>
      <Navigation />
      <HeaderButtonContainer />
    </S.Header>
  );
};

export default Header;
