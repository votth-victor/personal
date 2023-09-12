import React from "react";
import Button from "../Button/Button/Button.component";
import { Container, LinkSection, Title } from "./LinkList.styles";

function LinkList() {
  return (
    <Container>
      <LinkSection>
        <Title>Links úteis</Title>
        <Button
          label={"Votth digital"}
          icon="website"
          onClick={() => console.log("teste")}
        />
        <Button
          label={"Whatsapp"}
          icon="whatsapp"
          onClick={() => console.log("teste")}
        />
      </LinkSection>
      <LinkSection>
        <Title>Social</Title>
        <Button
          label={"Linkedin"}
          icon="linkedin"
          onClick={() => console.log("teste")}
        />
        <Button
          label={"Instagram"}
          icon="instagram"
          onClick={() => console.log("teste")}
        />
        <Button
          label={"Email"}
          icon="email"
          onClick={() => console.log("teste")}
        />
      </LinkSection>
    </Container>
  );
}

export default LinkList;
