import { keyframes, styled } from "styled-components";

export const StyledAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 59px;
`;

export const StyledContent = styled.div`
  width: 100%;

  & img {
    width: 100%;
  }
`;

export const StyledHeader = styled.header`
  padding: 5vh 0;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  user-select: none;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  margin: 40px;
  padding: 0;
  margin-left: calc(10vw * 0.5);
  margin-right: calc(10vw * 0.5);
`;

export const StyledLi = styled.li`
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #aaa;

  & > a {
    padding: 10px;
    display: grid;
    row-gap: 5px;
    column-gap: 20%;
    grid-template-rows: auto auto;
    grid-template-columns: 5fr 1fr;
    color: inherit;
    text-decoration: none;
    min-height: 0;
    min-width: 0;
  }
  & > a:hover div:first-child {
    color: red;
  }

  & > a > * {
    word-break: keep-all;
    min-width: 0;
  }
  & > a > div:first-child {
    color: blue;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.2s ease;
    overflow-wrap: anywhere;
  }
  & > a > div:nth-child(2) {
    font-size: 0.9rem;
  }
  & > a > div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    grid-column: 2;
    grid-row: 1 / span 2;
  }
`;

export const StyledLoading = styled.div<{ $visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled.div`
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border: 15px solid rgba(163, 151, 198, 0.2);
  border-top: 15px solid rgba(163, 151, 198, 1);
  border-radius: 50%;
`;

export const StyledUserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    border-radius: 50%;
    width: 80px;
    aspect-ratio: 1 / 1;
  }
`;
