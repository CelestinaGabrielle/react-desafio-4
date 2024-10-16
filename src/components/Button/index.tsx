import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled} style={{ opacity: disabled ? 0.5 : 1 }} >{title}</ButtonContainer>;
  
};

export default Button;
