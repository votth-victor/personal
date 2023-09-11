import React from "react";
import {
  BackgroundImage,
  Container,
  InfoContainer,
  Name,
  NameContainer,
  Position,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
  Username,
  VerifiedImage,
} from "./Header.styles";

const verified = require("../../assets/icons/verified_icon_16x16.png");
const profileImage = require("../../assets/profile/profileImage.jpeg");
const artboard = require("../../assets/profile/artboard.png");

function Header() {
  return (
    <Container>
      <BackgroundImage src={artboard} />
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage src={profileImage} />
        </ProfileImageContainer>
        <InfoContainer>
          <NameContainer>
            <Name>Victor Nunes</Name>
            <VerifiedImage src={verified} height={16} width={16} />
          </NameContainer>
          <Username>@victornnunes</Username>
          <Position>CEO at Votth</Position>
        </InfoContainer>
      </ProfileContainer>
    </Container>
  );
}

export default Header;
