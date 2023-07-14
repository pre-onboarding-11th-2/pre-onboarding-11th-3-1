import { styled } from "styled-components";

const Error = () => {
  return (
    <StyledError>
      <h1>404 Not Found</h1>
    </StyledError>
  );
};

const StyledError = styled.main`
  width: 100%;
  text-align: center;
  word-break: keep-all;
`;

export default Error;
