import styled, { keyframes } from "styled-components/macro";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  min-height: calc(100vh - 112px);
  padding: 0 30px;
  margin: 32px auto 0;

  @media (max-width: 576px) {
    padding-bottom: 30px;
    margin-bottom: 0;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;

  span {
    margin-left: 24px;
    font-size: 20px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-top: 0;
    margin-left: auto;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    img {
      margin-bottom: 1rem;
    }

    span,
    a {
      margin-bottom: 1rem;
      margin-left: 0;
    }
  }
`;

export const ProfileButton = styled.button`
  width: 60px;
  height: 60px;
  margin-left: 16px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition: border-color 0.2s;

  @media (max-width: 576px) {
    &:not(:last-child) {
      margin-left: 0;
    }
  }

  &:hover {
    border-color: var(--border-color-hover);
  }
`;

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding-left: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  li {
    position: relative;
    padding: 24px;
    background-color: #ffffff;
    border-radius: 8px;

    button {
      position: absolute;
      top: 24px;
      right: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border: 0;
      border-radius: 50%;
      outline: 0;
      transition: all 0.15s ease-in-out;

      > .loading {
        position: absolute;
        top: 15px;
        right: 15px;
        animation: ${rotate} 0.5s linear infinite;
      }

      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: var(--btn-back-color);
    }
  }

  p {
    font-size: 16px;
    line-height: 21px;
    color: var(--secondary-text-color);

    + strong {
      margin-top: 32px;
    }
  }
`;
