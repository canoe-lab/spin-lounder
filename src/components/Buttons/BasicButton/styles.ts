import styled from "styled-components";

interface IButtonTypes {
  width?: string;
  height?: string;
  type?: "filed" | "outlined";
}

export const Button = styled.button<IButtonTypes>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  padding: 0 13px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: ${({ theme, type }) =>
    type === "outlined" ? theme.colors.lightBlue : theme.colors.darkBlue};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  background-color: ${({ theme, type }) =>
    type === "outlined" ? theme.colors.darkBlue : theme.colors.lightBlue};

  &:disabled {
    background-color: ${({ theme }) => {
      return theme.colors.lightGray;
    }};
    cursor: not-allowed;
  }
`;
