import styled from "styled-components/macro";

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 80%;
    margin-right: 0;
  }

  form {
    margin-top: 100px;
  }

  h1 {
    margin-bottom: 32px;
    font-size: 32px;
  }

  .logo {
    width: 260px;
    height: auto;

    @media (max-width: 576px) {
      display: block;
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }
`;

export const Hero = styled.img`
  width: 60%;
  height: auto;

  @media (max-width: 576px) {
    display: block;
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
`;
