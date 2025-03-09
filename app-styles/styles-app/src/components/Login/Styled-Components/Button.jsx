import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.blue ? "blue" : "gray")};
  color: ${(props) => (props.white ? "white" : "black")};
  padding: 10px 20px;
  border: none;
`;

const Button = ({ children, blue, white }) => {
  return (
    <StyledButton blue={blue} white={white}>
      {children}
    </StyledButton>
  );
};

export default Button;
