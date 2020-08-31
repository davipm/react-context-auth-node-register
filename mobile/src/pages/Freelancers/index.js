import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import api from "../../services/api";
import logoImg from "../../assets/logo.png";
import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  FreelancerList,
  Incident,
  FreelancerProperty,
  FreelancerValue,
  DetailsButton,
  DetailsButtonText,
} from "./styles";

function Freelancers() {
  const navigation = useNavigation();
  const [freelancer, setFreelancer] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFreelancers();
  }, []);

  function navigationToDetails(freelancer) {
    navigation.navigate("Detail", { freelancer });
  }

  async function loadFreelancers() {
    if (loading) return null;
    if (total > 0 && freelancer.length === total) return null;
    setLoading(true);

    try {
      const { data, headers } = await api.get("/freelancer", {
        params: { page },
      });

      setFreelancer([...freelancer, ...data]);
      setTotal(headers["x-total-count"]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          <HeaderTextBold>{total} Freelancers available</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Welcome!</Title>
      <Description>choose a freelancer below and contact.</Description>

      <FreelancerList
        data={freelancer}
        keyExtractor={(freelancer) => String(freelancer.id)}
        onEndReached={loadFreelancers}
        onEndReachedThreshold={0.2}
        renderItem={({ item: freelancer }) => (
          <Incident>
            <FreelancerProperty>Company Name:</FreelancerProperty>
            <FreelancerValue>{freelancer.name}</FreelancerValue>

            <FreelancerProperty>Freelancer:</FreelancerProperty>
            <FreelancerValue>{freelancer.title}</FreelancerValue>

            <FreelancerProperty>PRICE/H:</FreelancerProperty>
            <FreelancerValue>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(freelancer.value)}
            </FreelancerValue>

            <DetailsButton onPress={() => navigationToDetails(freelancer)}>
              <DetailsButtonText>See more details</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#536DFE" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}

export default Freelancers;
