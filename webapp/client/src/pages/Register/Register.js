import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";

import { PageContainer, Input } from "../../styles/utils";
import { Content, InlineInput } from "./styles";
import { Button, BackButton } from "../../components/Button";

function Register() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  async function onSubmit(data) {
    try {
      const { data: { id } } = await api.post("/companys", data);
      alert(`your id is ${id}, you need this to logon`);
      history.push("/");
    } catch (error) {
      toast.error("Error, tray Again!", {
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }

  return (
    <PageContainer>
      <Content>
        <section>
          <Link to="/">
            <img src={logoImg} alt="Welcome" />
          </Link>
          <h1>Register</h1>
          <p>Register your company and start registering your freelancers</p>
          <BackButton as={Link} to="/">
            <FiArrowLeft size={16} color="#536DFE" />I Have Account
          </BackButton>
        </section>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            error={errors.name}
            ref={register({ required: true, minLength: 4 })}
          />
          <Input
            type="email"
            name="email"
            placeholder="E-Mail"
            error={errors.email}
            ref={register({ required: true })}
          />
          <Input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp"
            error={errors.whatsapp}
            ref={register({ required: true })}
          />

          <InlineInput>
            <Input
              type="text"
              name="city"
              placeholder="City"
              error={errors.city}
              ref={register({ required: true })}
            />
            <Input
              type="text"
              name="uf"
              placeholder="UF"
              error={errors.uf}
              ref={register({ required: true, minLength: 2, maxLength: 2 })}
            />
          </InlineInput>

          <Button type="submit">Register</Button>
        </form>
      </Content>
    </PageContainer>
  );
}

export default Register;
