import styled from "styled-components";

export const Logo = styled.div`
  width: 25%;
  height: inherit;
  padding-top: 15px;
  display: flex;
  align-items: start;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  height: 93px;
  width: 100%;
  font-family: "Poppins", sans-serif;

  & nav {
    align-items: start;
    height: 100%;
    width: 55%;
  }

  & ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding-top: 20px;
    justify-content: space-between;

    & li {
      white-space: nowrap;
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  position: relative;
  width: 20%;
  height: inherit;
  flex-direction: column;
  align-items: flex-end;

  & button {
    margin-bottom: 15px;
  }

  & p {
    position: absolute;
    width: max-content;
    font-weight: 300;
    bottom: 0;
    right: 0;
    opacity: 0.7;
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize};
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const MainLayout = styled.div`
  width: 100%;
  max-width: 1610px;
`;
