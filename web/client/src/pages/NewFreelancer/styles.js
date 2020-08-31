import styled from "styled-components/macro";
import { CenterForm } from "../../styles/utils";

export const Content = styled(CenterForm)`
  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: var(--secondary-text-color);
      line-height: 32px;
    }

    img {
      width: 260px;
      height: auto;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  margin-left: auto;

  input,
  textarea {
    margin-top: 1rem;
  }
`;
