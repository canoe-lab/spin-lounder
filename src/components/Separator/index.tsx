//styles
import * as S from "./styles";

const Separator = ({ width = "0px", ...rest }) => {
  return <S.Separator width={width} {...rest} />;
};

export default Separator;
