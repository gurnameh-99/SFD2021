import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  disabled,
  onClick,
}: ButtonProps) => (
  <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);
