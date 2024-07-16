import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  typography: {
    heading1: {
      fontSize: "4rem", // 64px / 16
      lineHeight: "5.0625rem" // 81px / 16
    },
    heading2: {
      fontSize: "2.25rem", // 36px / 16
      lineHeight: "1.875rem" // 30px / 16
    },
    heading3: {
      fontSize: "2rem", // 32px / 16
      lineHeight: "1.875rem" // 30px / 16
    },
    heading4: {
      fontSize: "1.75rem", // 28px / 16
      lineHeight: "1.875rem" // 30px / 16
    },
    heading5: {
      fontSize: "1.5rem", // 24px / 16
      lineHeight: "1.875rem" // 30px / 16
    },
    heading6: {
      fontSize: "1.25rem", // 20px / 16
      lineHeight: "1.5625rem" // 25px / 16
    },
    paragraph: {
      fontSize: "1rem", // 16px / 16
      lineHeight: "1.625rem" // 26px / 16
    }
  },
  colors: {
    white: "#FFFFFF",
    darkBlue: "#000022",
    lightBlue: "#92DEED",
    gradientBlue: "linear-gradient(blue, lightblue)",
    gradientWhite: "linear-gradient(white, gray)",
    strokeGradient: "linear-gradient(black, gray)",
    lightGray: "#D3D3D3",
    gradientBlack: "linear-gradient(black, darkgray)",
    lightGrayGradient: "linear-gradient(lightgray, white)"
  },
  effects: {
    gradientBlur: "blur(4px)",
    backgroundBlur: "blur(8px)",
    dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  }
};

export default theme;
