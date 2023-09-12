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
          <ShareContact>
            <ShareIcon />
          </ShareContact>
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
