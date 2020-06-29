import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import heroImg from "../../assets/hero.svg";

import { PageContainer } from "../../styles/utils";
import { Form, Hero } from "./styles";
import { Button, BackButton } from "../../components/Button";

function Logon() {
  const [id, setId] = useState(localStorage.getItem("companyId") || "");
  const history = useHistory();

  /**
   *
   * @param event
   * @returns {Promise<void>}
   */
  async function handleLogin(event) {
    event.preventDefault();
    try {
      const { data: { name } } = await api.post("/sessions", { id });
      localStorage.setItem("companyId", id);
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

        <form onSubmit={handleLogin} autoComplete="off">
          <h1>Do your Login</h1>

          <input
            type="text"
            placeholder="Your ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
            required
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
