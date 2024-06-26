import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 10px;
  padding: 18px;
  text-align: center;

  h3 {
    margin-top: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
