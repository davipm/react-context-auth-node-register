import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useMutation } from "react-query";

import { useAuth } from "../../contexts/auth";
import { createFreelancer } from "../../services/api";
import logoImg from "../../images/logo.svg";

import { PageContainer, Input } from "../../styles/utils";
import { Form, Content } from "./styles";
import { Button, BackButton } from "../../components/Button";

type NewFreelanceInputs = {
  title: string;
  description: string;
  value: string;
};

export default function NewFreelancer() {
  const history = useHistory();
  const { companyId } = useAuth();
  const { register, errors, handleSubmit } = useForm<NewFreelanceInputs>();

  const mutation = useMutation((data) => createFreelancer(data, companyId), {
    onSuccess: () => history.push("/profile"),
  });

  function onSubmit(data: any) {
    mutation.mutate(data);
  }

  return (
    <PageContainer>
      <Content>
        <section>
          <img src={logoImg} alt="Welcome" />
          <h1>New Freelancer</h1>
          <p>Register a new Freelancer describing your skills</p>
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
            // @ts-ignore
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

          <Button type="submit" disabled={mutation.isLoading}>
            Register
            {mutation.isLoading && (
              <AiOutlineLoading3Quarters size={20} className="loading" />
            )}
          </Button>
        </Form>
      </Content>
    </PageContainer>
  );
}
