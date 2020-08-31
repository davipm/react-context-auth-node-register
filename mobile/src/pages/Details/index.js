import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailCompose from "expo-mail-composer";
import { Image, TouchableOpacity, Linking } from "react-native";

import logoImg from "../../assets/logo.png";
import {
  Container,
  Header,
  Freelancer,
  FreelancerValue,
  FreelancerProperty,
  Action,
  Actions,
  ActionText,
  ContactBox,
  HeroDescription,
  HeroTitle,
} from "./styles";

function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const freelancer = route.params.freelancer;
  const message = `Hello, ${
    freelancer.title
  }, I saw your profile and would like to chat "${
    freelancer.name
  }" with the value of ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(freelancer.value)}`;

  function navigationBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailCompose.composeAsync({
      subject: `Freelancer: ${freelancer.title}`,
      recipients: [freelancer.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${freelancer.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#536DFE" />
        </TouchableOpacity>
      </Header>

      <Freelancer>
        <FreelancerProperty>COMPANY NAME/CITY:</FreelancerProperty>
        <FreelancerValue>
          {freelancer.name} de {freelancer.city}/{freelancer.uf}
        </FreelancerValue>

        <FreelancerProperty>FREELANCER NAME:</FreelancerProperty>
        <FreelancerValue>{freelancer.title}</FreelancerValue>

        <FreelancerProperty>DESCRIPTION:</FreelancerProperty>
        <FreelancerValue>{freelancer.description}</FreelancerValue>

        <FreelancerProperty>PRICE/H:</FreelancerProperty>
        <FreelancerValue>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(freelancer.value)}
        </FreelancerValue>
      </Freelancer>

      <ContactBox>
        <HeroTitle>Contact this Freelancer</HeroTitle>

        <HeroDescription>Contact:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}

export default Details;
