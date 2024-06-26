import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;

    @media (max-width: 550px) {
      width: 22px;
      top: 18px;
    }
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0 0 16px;
    padding: 0 0 0 54px;
    border: 0;
    outline: none;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    @media (max-width: 550px) {
      font-size: var(--fontMed);
      margin: 8px;
    }
  }
`;
