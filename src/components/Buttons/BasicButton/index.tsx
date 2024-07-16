import { FC } from "react";

//styles
import * as S from "./styles";

//types
interface IButtonTypes {
  text: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "filed" | "outlined";
}

const Button: FC<IButtonTypes> = ({
  text,
  onClick,
  width = "fit-content",
  height = "58px",
  disabled = false,
  type = "outlined",
  ...rest
}) => {
  return (
    <S.Button
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {text}
    </S.Button>
  );
};

export default Button;
