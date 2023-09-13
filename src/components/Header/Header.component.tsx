import React from "react";
import {
  ActionButtonsContainer,
  AddContactLabel,
  BackgroundImage,
  Container,
  InfoContainer,
  Name,
  NameContainer,
  Position,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
  SaveNumber,
  ShareContact,
  Username,
} from "./Header.styles";
import Verified from "../../assets/icons/verified.component";
import ShareIcon from "../../assets/icons/ShareIcon.component";
import AddContactIcon from "../../assets/icons/AddContactIcon.component";
import { createVCard } from "../../utils/VCardCreator";
import OptionsIcon from "../../assets/icons/OptionsIcon.component";
import { RWebShare } from "react-web-share";

const profileImage = require("../../assets/profile/profileImage.jpeg");
const artboard = require("../../assets/profile/artboard.png");

function Header() {
  return (
    <Container>
      <BackgroundImage src={artboard} draggable={false} />
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src={profileImage} draggable={false} />
        </ProfileImageContainer>
        <ActionButtonsContainer>
          <SaveNumber onClick={() => createVCard()}>
            <AddContactIcon />
            <AddContactLabel>Salvar contato</AddContactLabel>
          </SaveNumber>
          <RWebShare
            data={{
              text: "Acesse meu cartão digital e tenha acesso a todas as minhas informações de contato! \n",
              url: "https://votth-victor.github.io/personal-page",
              title: "Victor Nunes - VOTTH Digital",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <ShareContact>
              <OptionsIcon />
            </ShareContact>
          </RWebShare>
        </ActionButtonsContainer>
        <InfoContainer>
          <NameContainer>
            <Name>Victor Nunes</Name>
            <Verified />
          </NameContainer>
          <Username>@victornnunes</Username>
          <Position>CEO at Votth Digital</Position>
        </InfoContainer>
      </ProfileContainer>
    </Container>
  );
}

export default Header;
