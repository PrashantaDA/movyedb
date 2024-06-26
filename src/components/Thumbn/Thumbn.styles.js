import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  h1 {
    color: #eef7ff;
  }

  p {
    font-size: var(--fontSmall);
    position: absolute;
    z-index: 5;
    bottom: 22%;
    left: 0;
    padding: 20px;
    height: 120px;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    display: none;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
  }

  :hover {
    img {
      filter: brightness(40%);
    }

    p {
      display: -webkit-box !important;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  max-height: 340px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumbn 0.5s;

  @keyframes animateThumbn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const HeadText = styled.h1`
  font-size: var(--fontMed);
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
