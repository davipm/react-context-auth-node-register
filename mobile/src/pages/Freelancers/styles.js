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

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const Title = styled.Text`
  margin-top: 48px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #13131a;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const FreelancerList = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  margin-bottom: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const FreelancerProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const FreelancerValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #536DFE;
  font-size: 15px;
  font-weight: bold;
`;
