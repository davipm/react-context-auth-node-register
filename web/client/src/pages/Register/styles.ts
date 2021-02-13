import styled from "styled-components/macro";
import { CenterForm } from "../../styles/utils";

export const Content = styled(CenterForm)`
  section {
    width: 100%;
    max-width: 380px;
    margin-right: 20px;
    
    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      line-height: 32px;
      color: var(--secondary-text-color);
    }

    img {
      width: 260px;
      height: auto;
    }
  }
`;

export const InlineInput = styled.div`
  display: flex;
  
  input + input {
    margin-left: 8px;
  }
`;
