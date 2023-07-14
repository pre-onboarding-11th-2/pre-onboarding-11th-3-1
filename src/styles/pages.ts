import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  row-gap: 20px;
  column-gap: 10px;
  grid-template-rows: auto auto;
  grid-template-columns: 80px auto;
  margin: 30px;
  margin-left: calc(10vw * 0.5);
  margin-right: calc(10vw * 0.5);
  min-height: 0;
  min-width: 0;

  & > * {
    overflow: hidden;
    min-width: 0;
  }
  & > div:last-child {
    grid-column: 1 / span 2;
  }
`;

export const StyledError = styled.main`
  width: 100%;
  text-align: center;
  word-break: keep-all;
`;
