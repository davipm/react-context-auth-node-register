import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import styles from "./newIncident.module.scss";
import logoImg from "../../assets/logo.svg";

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
    <div className="page-container">
      <div className={`${styles.content} center-form`}>
        <section>
          <img src={logoImg} alt="Welcome" />
          <h1>New Freelancer</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#536DFE" />
            Back
          </Link>
        </section>

        <form
          onSubmit={handleNewFreelancer}
          autoComplete="off"
          className={styles.form}
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

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewFreelancer;
