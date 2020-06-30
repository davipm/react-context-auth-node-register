import styled from "styled-components/macro";

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  height: 60px;
  margin-top: 16px;
  font-weight: 700;
  color: var(--btn-primary-text);
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
  user-select: none;
  text-decoration: none;
  line-height: 60px;
  background-color: var(--btn-primary);
  border: 0;
  outline: 0;
  border-radius: 8px;
  transition: filter 0.15s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: var(--btn-back-color);
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
