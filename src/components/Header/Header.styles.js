import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  span {
    text-transform: uppercase;
  }

  a {
    color: var(--white);
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media (max-width: 550px) {
    width: 150px;
  }

  @media (max-width: 420px) {
    width: 100px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media (max-width: 550px) {
    width: 80px;
  }

  @media (max-width: 420px) {
    width: 60px;
  }
`;
