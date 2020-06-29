import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";

import { PageContainer } from "../../styles/utils";
import { Form, Content } from "./styles";
import { Button, BackButton } from "../../components/Button";

function NewFreelancer() {
  const history = useHistory();
  const companyId = localStorage.getItem("companyId");
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      description: "",
      value: "",
    }
  );

  /**
   *
   * @param event
   * @returns {Promise<void>}
   */
  async function handleNewFreelancer(event) {
    event.preventDefault();

    try {
      await api.post("/freelancer", userInput, {
        headers: {
          Authorization: companyId,
        },
      });

      toast.success('New Freelancer created!', {
        hideProgressBar: true,
        autoClose: 3000
      });

      history.push("/profile");
    } catch (error) {
      toast.error('Error, tray Again!', {
        hideProgressBar: true,
        autoClose: 3000
      });
    }
  }

  /**
   *
   * @param event
   */
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
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

        <Form
          onSubmit={handleNewFreelancer}
          autoComplete="off"
        >
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Name"
            value={userInput.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            cols="30"
            rows="10"
            value={userInput.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="value"
            id="value"
            placeholder="Price $"
            value={userInput.value}
            onChange={handleChange}
            required
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
