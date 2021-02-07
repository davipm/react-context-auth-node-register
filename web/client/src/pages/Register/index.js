import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { useMutation } from "react-query";

import api from "../../services/api";
import logoImg from "../../images/logo.svg";

import { PageContainer, Input } from "../../styles/utils";
import { Content, InlineInput } from "./styles";
import { Button, BackButton } from "../../components/Button";

export default function Register() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const mutation = useMutation((company) => api.post("/companys", company), {
    onSuccess: ({ data }) => {
      confirmAlert({
        title: "Save your ID",
        childrenElement: () => (
          <p>
            your <strong>ID</strong> is <strong>{data.id}</strong>, you need
            this to logon
          </p>
        ),
        closeOnEscape: false,
        closeOnClickOutside: false,
        buttons: [
          {
            label: "Ok!",
            onClick: () => history.push("/"),
          },
        ],
      });
    },
    onError: () => toast.error("Error, tray Again!"),
  });

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

        <form
          onSubmit={handleSubmit((data) => mutation.mutate(data))}
          autoComplete="off"
        >
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

          <Button type="submit">
            Register
            {mutation.isLoading && (
              <AiOutlineLoading3Quarters size={20} className="loading" />
            )}
          </Button>
        </form>
      </Content>
    </PageContainer>
  );
}
