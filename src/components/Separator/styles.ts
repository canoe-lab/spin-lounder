import styled from "styled-components";

export const Separator = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
`;
