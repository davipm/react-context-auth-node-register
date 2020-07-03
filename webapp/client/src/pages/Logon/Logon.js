import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";

import { useAuth } from "../../contexts/auth";
import logoImg from "../../assets/logo.svg";
import heroImg from "../../assets/hero.svg";

import { PageContainer, Input } from "../../styles/utils";
import { Section, Hero } from "./styles";
import { Button, BackButton } from "../../components/Button";

function Logon() {
  const { register, handleSubmit, errors } = useForm();
  const { singIn } = useAuth();

  return (
    <PageContainer>
      <Section>
        <img src={logoImg} alt="Welcome" className="logo" />

        <form onSubmit={handleSubmit(singIn)} autoComplete="off">
          <h1>Do your Login</h1>

          <Input
            type="text"
            name="id"
            error={errors.id}
            placeholder="Your ID"
            defaultValue={localStorage.getItem("companyId") || ""}
            ref={register({ required: true })}
          />

          <Button type="submit" data-testid="submit">
            Login
          </Button>

          <BackButton as={Link} to="/register" className="back-link">
            <FiLogIn size={16} color="#536DFE" />
            Create account
          </BackButton>
        </form>
      </Section>

      <Hero src={heroImg} alt="Heroes" />
    </PageContainer>
  );
}

export default Logon;
