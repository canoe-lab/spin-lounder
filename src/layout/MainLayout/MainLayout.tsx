import { FC, ReactNode } from "react";
import Header from "../Header";
import MainContent from "../MainContent";
//styles
import * as S from "../styles";
//types
interface IMainLayoutTypes {
  children: ReactNode;
}
const MainLayout: FC<IMainLayoutTypes> = ({ children }) => {
  return (
    <S.MainLayout>
      <Header />
      <MainContent>{children}</MainContent>
    </S.MainLayout>
  );
};

export default MainLayout;
