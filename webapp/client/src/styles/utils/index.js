import styled, { css } from "styled-components/macro";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  min-height: calc(100vh - 80px);
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 0;
    flex-direction: column;
    height: auto;
  }
`;

export const CenterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 96px;
  background-color: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 95%;
    padding: 15px;
  }
`;

export const Input = styled.input`
  ${({ error }) => error && css`
    color: #dc3545;
    border-color: #dc3545;
    
    &::placeholder {
      color: #dc3545;
    }
  `}
`;
