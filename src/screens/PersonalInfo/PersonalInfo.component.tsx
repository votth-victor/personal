import React from "react";
import Header from "../../components/Header/Header.component";
import LinkList from "../../components/LinkList/LinkList.component";
import { Container } from "./PersonalInfo.styles";

function PersonalInfo() {
  return (
    <Container>
      <Header />
      <LinkList />
    </Container>
  );
}

export default PersonalInfo;
