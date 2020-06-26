import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import styles from "./register.module.scss";

function Register() {
  const history = useHistory();
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      whatsapp: "",
      city: "",
      uf: "",
    }
  );

  /**
   *
   * @param event
   * @returns {Promise<void>}
   */
  async function handleRegister(event) {
    event.preventDefault();
    try {
      const { data } = await api.post("/companys", userInput);
      alert(`your id is ${data.id}, you need this to logon`);
      history.push("/");
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
    <div className="page-container">
      <div className={`${styles.content} center-form`}>
        <section>
          <Link to="/">
            <img src={logoImg} alt="Welcome" />
          </Link>
          <h1>Register</h1>
          <p>
            Register your company and start registering your freelancers
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#536DFE" />I Have Account
          </Link>
        </section>

        <form onSubmit={handleRegister} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userInput.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={userInput.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp"
            value={userInput.whatsapp}
            onChange={handleChange}
            required
          />

          <div className={styles.inlineInput}>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={userInput.city}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="uf"
              placeholder="UF"
              value={userInput.uf}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
