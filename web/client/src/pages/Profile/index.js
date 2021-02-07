import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import api, { loadProfile, deleteProfile } from "../../services/api";
import { useAuth } from "../../contexts/auth";
import logoImg from "../../images/logo.svg";

import {
  ProfileContainer,
  ProfileHeader,
  ProfileButton,
  ProfileList,
} from "./styles";

import { Button } from "../../components/Button";

export default function Profile() {
  const queryClient = useQueryClient();
  const { user, companyId, singOut } = useAuth();

  const { data: freelancer, isLoading, error } = useQuery("profiles", () =>
    loadProfile(companyId)
  );

  const onDeleteProfile = useMutation((id) => deleteProfile(id, companyId), {
    onSuccess: () => {
      queryClient.invalidateQueries("profiles");
    },
  });

  async function deleteCompany(event) {
    event.preventDefault();

    try {
      await api.delete(`/companys/${companyId}`);
      toast.info(`Ong ${user} deleted`);
      singOut();
    } catch (error) {
      toast.error("error deleting Company, try again");
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
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>Error!</h3>}

        {freelancer?.map((item) => (
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
              onClick={() => onDeleteProfile.mutate(item.id)}
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
