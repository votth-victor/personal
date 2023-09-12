import React from "react";
import Header from "../../components/Header/Header.component";
import LinkList from "../../components/LinkList/LinkList.component";
import { Caption, Container, Link } from "./PersonalInfo.styles";

function PersonalInfo() {
  return (
    <Container>
      <Header />
      <LinkList />
      <Caption>
        Desenvolvido por{" "}
        <Link href="https://votth.com" target="_blank" rel="noreferrer">
          Votth
        </Link>
      </Caption>
    </Container>
  );
}

export default PersonalInfo;
