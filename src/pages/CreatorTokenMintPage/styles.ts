import styled from "styled-components";

export const CreatorTokenMinPageContainer = styled.div`
  display: flex;
  max-width: 1610px;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  margin: 20px;
  margin-top: 80px;

  & > h1 {
    margin-bottom: 43px;
    font-family: "Space Grotesk", sans-serif;
    font-size: ${({ theme }) => theme.typography.heading1.fontSize};
    line-height: ${({ theme }) => theme.typography.heading1.lineHeight};
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: left;
`;
export const BottomContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: row;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  text-align: justify;
  flex-direction: column;
  width: 100%;
  font-family: "Poppins", sans-serif;

  & h1 {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: ${({ theme }) => theme.typography.heading2.fontSize};
    line-height: ${({ theme }) => theme.typography.heading2.lineHeight};
    margin-bottom: 25px;
  }

  & p {
    font-size: ${({ theme }) => theme.typography.heading5.fontSize};
    line-height: ${({ theme }) => theme.typography.heading5.lineHeight};
  }
`;

export const MintContainer = styled.div`
  & h1 {
    text-align: justify;
    font-family: "Space Grotesk", sans-serif;
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: ${({ theme }) => theme.typography.heading2.fontSize};
    line-height: ${({ theme }) => theme.typography.heading2.lineHeight};
    margin-bottom: 22px;

    & span {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  & > p {
    margin-bottom: 15px;
    text-align: justify;
    font-family: "Poppins", sans-serif;

    strong {
      font-weight: 700;
    }
  }
`;

export const PriceSection = styled.div`
  font-family: "Space Grotesk", sans-serif;
`;

export const MintSection = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Space Grotesk", sans-serif;
  margin-left: 15px;

  & p {
    font-size: ${({ theme }) => theme.typography.paragraph.fontSize};
    line-height: ${({ theme }) => theme.typography.paragraph.lineHeight};

    & span {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
`;

export const Left = styled.div`
  max-width: calc(53% - 40px);
`;

export const Right = styled.div`
  max-width: calc(47% - 40px);
`;

export const MintActionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const TotalCost = styled.p`
  font-family: "Space Grotesk", sans-serif !important;
  font-size: ${({ theme }) => theme.typography.heading3.fontSize} !important;
  line-height: ${({ theme }) => theme.typography.heading3.lineHeight} !important;
  span {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: ${({ theme }) => theme.typography.heading3.fontSize};
    line-height: ${({ theme }) => theme.typography.heading3.lineHeight};
  }
`;

export const NumberOfMint = styled.p`
  margin-right: 20px;
  font-size: ${({ theme }) => theme.typography.heading4.fontSize} !important;
  line-height: ${({ theme }) => theme.typography.heading4.lineHeight} !important;
`;

export const SuccessNotification = styled.div`
  margin-top: 20px;
  p {
    font-size: ${({ theme }) => theme.typography.heading3.fontSize};
  }
`;
