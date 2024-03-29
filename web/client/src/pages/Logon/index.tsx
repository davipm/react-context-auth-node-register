import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useAuth } from "../../contexts/auth";
import logoImg from "../../images/logo.svg";
import heroImg from "../../images/hero.svg";

import { PageContainer, Input } from "../../styles/utils";
import { Section, Hero } from "./styles";
import { Button, BackButton } from "../../components/Button";

export interface LoginInputInterface {
  id: string;
}

export default function Logon() {
  const { register, handleSubmit, errors } = useForm<LoginInputInterface>();
  const { singIn, loading, error } = useAuth();

  return (
    <PageContainer>
      <Section>
        <img src={logoImg} alt="Welcome" className="logo" />

        <form
          onSubmit={handleSubmit((data) => singIn!(data))}
          autoComplete="off"
        >
          <h1>Do your Login</h1>

          <Input
            type="text"
            name="id"
            error={errors.id}
            placeholder="Your ID"
            defaultValue={localStorage.getItem("companyId") || ""}
            ref={register({ required: true })}
          />
          {error && <i>Some problem happen!</i>}

          <Button type="submit" disabled={!!loading}>
            Login
            {loading && (
              <AiOutlineLoading3Quarters size={20} className="loading" />
            )}
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
