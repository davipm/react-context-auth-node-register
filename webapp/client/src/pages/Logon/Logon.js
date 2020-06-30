import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import heroImg from "../../assets/hero.svg";

import { PageContainer, Input } from "../../styles/utils";
import { Form, Hero } from "./styles";
import { Button, BackButton } from "../../components/Button";

function Logon() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  async function onSubmit(data) {
    try {
      const { data: { name } } = await api.post("/sessions", data );
      localStorage.setItem("companyId", data.id);
      localStorage.setItem("companyName", name);

      history.push("/profile");
    } catch (error) {
      toast.error(`${error}`, {
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }

  return (
    <PageContainer>
      <Form>
        <img src={logoImg} alt="Welcome" className="logo" />

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <h1>Do your Login</h1>

          <Input
            type="text"
            name="id"
            error={errors.id}
            placeholder="Your ID"
            defaultValue={localStorage.getItem('companyId') || ''}
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
      </Form>

      <Hero src={heroImg} alt="Heroes" />
    </PageContainer>
  );
}

export default Logon;
