import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  padding: 20px;
  margin: 0 auto;
  color: var(--darkGrey);

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  label {
    font-size: 20px;
    font-weight: bolder;
    margin-top: 10px;
  }

  .error {
    color: red;
    font-size: 25px;
  }
`;
