import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View.attrs({
  paddingTop: Constants.statusBarHeight + 20,
})`
  flex: 1 1 auto;
  padding-right: 24px;
  padding-left: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Freelancer = styled.View`
  margin-top: 20px;
  margin-bottom: 16px;
  padding: 24px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const FreelancerProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 24px;
`;

export const FreelancerValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`;

export const ContactBox = styled.View`
  margin-bottom: 16px;
  padding: 24px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 48%;
  background-color: #536DFE;
  border-radius: 8px;
`;

export const ActionText = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;
