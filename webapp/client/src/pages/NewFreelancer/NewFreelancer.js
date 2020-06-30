import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";

import { PageContainer, Input } from "../../styles/utils";
import { Form, Content } from "./styles";
import { Button, BackButton } from "../../components/Button";

function NewFreelancer() {
  const history = useHistory();
  const companyId = localStorage.getItem("companyId");
  const { register, errors, handleSubmit } = useForm();

  async function onSubmit(data) {
    try {
      await api.post('/freelancer', data, {
        headers: {
          Authorization: companyId
        }
      });

      toast.success('New Freelancer created!', {
        hideProgressBar: true,
        autoClose: 3000
      });

      history.push('/profile');
    } catch (error) {
      toast.error('Error, tray Again!', {
        hideProgressBar: true,
        autoClose: 3000
      });
    }
  }

  return (
    <PageContainer>
      <Content>
        <section>
          <img src={logoImg} alt="Welcome" />
          <h1>New Freelancer</h1>
          <p>
            Register a new Freelancer describing your skills
          </p>
          <BackButton as={Link} to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#536DFE" />
            Back
          </BackButton>
        </section>

        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Input
            type="text"
            name="title"
            placeholder="Name*"
            error={errors.title}
            ref={register({ required: true })}
          />
          <Input
            as="textarea"
            name="description"
            placeholder="Description*"
            cols="30"
            rows="10"
            error={errors.description}
            ref={register({ required: true })}
          />
          <Input
            type="number"
            name="value"
            placeholder="Price $*"
            error={errors.value}
            ref={register({ required: true })}
          />

          <Button type="submit">
            Register
          </Button>
        </Form>
      </Content>
    </PageContainer>
  );
}

export default NewFreelancer;
