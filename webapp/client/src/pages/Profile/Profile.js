import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import logoImg from "../../assets/logo.svg";

import {
  ProfileContainer,
  ProfileHeader,
  ProfileButton,
  ProfileList,
} from "./styles";
import { Button } from "../../components/Button";

function Profile() {
  const { user, companyId, singOut } = useAuth();
  const [freelancer, setFreelancer] = useState([]);

  useEffect(() => {
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

  async function deleteFreelancer(id) {
    try {
      await api.delete(`/freelancer/${id}`, {
        headers: {
          Authorization: companyId,
        },
      });

      toast.success("Freelancer Deleted!", {
        hideProgressBar: true,
        autoClose: 3000,
      });

      setFreelancer(freelancer.filter((item) => item.id !== id));
    } catch (error) {
      toast.error("error deleting freelancer, try again", {
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }

  async function deleteCompany(event) {
    event.preventDefault();

    try {
      await api.delete(`/companys/${companyId}`);

      toast.info(`Ong ${companyId} deleted`, {
        hideProgressBar: true,
        autoClose: 3000,
      });

      singOut();
    } catch (error) {
      toast.error("error deleting Company, try again", {
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={logoImg} alt="Welcome" />
        <span>Welcome {user}</span>

        <Button as={Link} to="/freelancer/new">
          New Freelancer
        </Button>

        <div>
          <ProfileButton
            type="button"
            onClick={deleteCompany}
            aria-label="Delete Ong"
            title="Delete Company"
          >
            <FiTrash2 size={20} color="#a8a8b3" />
          </ProfileButton>
          <ProfileButton
            type="button"
            onClick={singOut}
            aria-label="Log out"
            title="Log out"
          >
            <FiPower size={18} color="#536DFE" />
          </ProfileButton>
        </div>
      </ProfileHeader>

      <h1>Freelancers registered</h1>

      <ProfileList>
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
      </ProfileList>
    </ProfileContainer>
  );
}

export default Profile;
