import { FC, ReactNode } from "react";

//styles
import * as S from "../styles";

//types
interface IMainContentTypes {
  children: ReactNode;
}
const MainContent: FC<IMainContentTypes> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default MainContent;
