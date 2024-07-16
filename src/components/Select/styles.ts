import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Select = styled.select<any>`
  appearance: none;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #a1a5ac;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: white;
  padding: 0 10px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

export const ArrowDown = styled.div`
  position: absolute;
  right: 15px;
  top: 55%;
  transform: translateY(-50%);
  pointer-events: none;
  color: white;
  font-size: 18px;
  content: "⌃";
`;
