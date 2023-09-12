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
          icon="votth"
          onClick={() =>
            window.open("https://votth.com", "_blank", "noreferrer")
          }
        />
        <Button
          label={"Whatsapp"}
          icon="whatsapp"
          onClick={() =>
            window.open("whatsapp://send?text=hello&phone=+5531997204079")
          }
        />
      </LinkSection>
      <LinkSection>
        <Title>Social</Title>
        <Button
          label={"Linkedin"}
          icon="linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/victornnunees/",
              "_blank",
              "noreferrer"
            )
          }
        />
        <Button
          label={"Instagram"}
          icon="instagram"
          onClick={() =>
            window.open(
              "https://www.instagram.com/victornnunees/",
              "_blank",
              "noreferrer"
            )
          }
        />
        <Button
          label={"Email"}
          icon="email"
          onClick={() => window.location.assign("mailto:contato@votth.com")}
        />
      </LinkSection>
    </Container>
  );
}

export default LinkList;
