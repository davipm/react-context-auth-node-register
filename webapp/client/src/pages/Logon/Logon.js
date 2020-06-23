import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import styles from "./logon.module.scss";
import logoImg from "../../assets/logo.svg";
import heroImg from "../../assets/hero.svg";

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
        autoClose: 3000
      });
    }
  }

  return (
    <div className="page-container" data-testid="logon">
      <section className={styles.form}>
        <img src={logoImg} alt="Welcome" className={styles.logoImg} />

        <form onSubmit={handleLogin} autoComplete="off">
          <h1>Do your Login</h1>

          <input
            type="text"
            placeholder="Your ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
            required
          />

          <button className="button" type="submit" data-testid="submit">
            Login
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#536DFE" />
            Create account
          </Link>
        </form>
      </section>

      <img src={heroImg} alt="Heroes" className={styles.img} />
    </div>
  );
}

export default Logon;
