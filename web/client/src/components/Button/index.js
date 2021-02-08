import styled, { keyframes } from "styled-components/macro";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 60px;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 60px;
  color: var(--btn-primary-text);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  background-color: var(--btn-primary);
  border: 0;
  border-radius: 8px;
  outline: 0;
  transition: filter 0.15s ease-in-out;

  > .loading {
    position: absolute;
    top: 20px;
    right: 20px;
    animation: ${rotate} 0.5s ease-in-out infinite;
  }

  &:hover {
    filter: brightness(90%);
  }

  &:disabled {
    filter: brightness(50%);
  }
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 500;
  color: var(--btn-back-color);
  text-decoration: none;
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
