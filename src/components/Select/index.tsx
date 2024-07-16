import { FC } from "react";
import { NUMBER_OF_NFTS_OPTIONS } from "../../constants";

//styles
import * as S from "./styles";

//types
interface ISelectProps {
  setCount: (value: number) => void;
}

const Select: FC<ISelectProps> = ({ setCount }) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCount(Number(event.target.value));
  };

  return (
    <S.SelectWrapper>
      <S.Select onChange={onChangeHandler}>
        {NUMBER_OF_NFTS_OPTIONS.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </S.Select>
      <S.ArrowDown>⌃</S.ArrowDown>
    </S.SelectWrapper>
  );
};

export default Select;
