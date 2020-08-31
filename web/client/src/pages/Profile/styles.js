import styled from "styled-components/macro";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  min-height: calc(100vh - 112px);
  padding: 0 30px;
  margin: 32px auto 0;

  @media (max-width: 576px) {
    margin-bottom: 0;
    padding-bottom: 30px;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    
    img {
      margin-bottom: 1rem;
    }

    span,
    a {
      margin-left: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const ProfileButton = styled.button`
  width: 60px;
  height: 60px;
  margin-left: 16px;
  border: 1px solid var(--border-color);
  background-color: transparent;
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
  list-style: none;
  padding-left: 0;
  margin: 0;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  li {
    position: relative;
    padding: 24px;
    background-color: #ffffff;
    border-radius: 8px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 50px;
      height: 50px;
      right: 24px;
      top: 24px;
      border: 0;
      border-radius: 50%;
      transition: all 0.15s ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: var(--btn-back-color);
    }

    p + strong {
      margin-top: 32px;
    }

    p {
      color: var(--secondary-text-color);
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
