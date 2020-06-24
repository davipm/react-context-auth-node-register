import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import styles from "./profile.module.scss";

function Profile() {
  const history = useHistory();
  const companyId = localStorage.getItem("companyId");
  const companyName = localStorage.getItem("companyName");
  const [freelancer, setFreelancer] = useState([]);

  useEffect(() => {
    /**
     *
     * @returns {Promise<void>}
     */
    async function handleApi() {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: companyId,
          },
        });

        setFreelancer(data);
      } catch (error) {
        console.log("error profile");
      }
    }

    handleApi();
  }, [companyId]);


  /**
   *
   * @param id
   * @returns {Promise<void>}
   */
  async function deleteFreelancer(id) {
    try {
      await api.delete(`/freelancer/${id}`, {
        headers: {
          Authorization: companyId,
        },
      });

      toast.success('Freelancer Deleted!', {
        hideProgressBar: true,
        autoClose: 3000
      });

      setFreelancer(freelancer.filter((item) => item.id !== id));
    } catch (error) {
      toast.error('error deleting freelancer, try again', {
        hideProgressBar: true,
        autoClose: 3000
      });
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  /**
   *
   * @param event
   * @returns {Promise<void>}
   */
  async function deleteCompany(event) {
    event.preventDefault();

    try {
      await api.delete(`/companys/${companyId}`);

      toast.info(`Ong ${companyId} deleted`, {
        hideProgressBar: true,
        autoClose: 3000
      });

      handleLogout();
    } catch (error) {
      toast.error('error deleting Company, try again', {
        hideProgressBar: true,
        autoClose: 3000
      });
    }
  }

  return (
    <div className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <img src={logoImg} alt="Welcome" />
        <span>Welcome {companyName}</span>

        <Link to="/freelancer/new" className="button">
          New Freelancer
        </Link>

        <div>
          <button
            className={styles.profileButton}
            type="button"
            onClick={deleteCompany}
            aria-label="Delete Ong"
            title="Delete Company"
          >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
          <button
            className={styles.profileButton}
            type="button"
            onClick={handleLogout}
            aria-label="Log out"
            title="Log out"
          >
            <FiPower size={18} color="#536DFE" />
          </button>
        </div>
      </header>

      <h1>Freelancers registered</h1>

      <ul className={styles.profileList}>
        {freelancer.map((item) => (
          <li key={item.id}>
            <strong>NAME:</strong>
            <p>{item.title}</p>

            <strong>DESCRIPTION:</strong>
            <p>{item.description}</p>

            <strong>PRICE/H:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.value)}
            </p>

            <button
              type="button"
              onClick={() => deleteFreelancer(item.id)}
              aria-label="Delete Freelancer"
              title="Delete Freelancer"
            >
              <FiTrash2 size={20} color="#536DFE" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
