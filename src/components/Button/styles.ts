import styled from "styled-components";

export const ButtonContainer = styled.button.attrs((props) => ({
  type: "button",
}))<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  background-color: ${({ disabled }) => (disabled ? "#5e636b" : "#81259d")}; 
  width: 100%;
  height: 42px; 
  color: #fff; 
  border: 1px solid #81259d; 
  border-radius: 21px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}; 
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.6)};
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#472569")}; 
  }

  &:focus {
    outline: none; // Remove o contorno padrão
    box-shadow: 0 0 0 3px rgba(130, 37, 157, 0.5); 
`;
