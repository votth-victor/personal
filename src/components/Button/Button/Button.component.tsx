import React from "react";
import VotthLogo from "../../../assets/icons/VotthLogo.component";
import { Container, Label } from "./Button.styles";
import EmailIcon from "../../../assets/icons/EmailIcon.component";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon.component";
import LinkedinIcon from "../../../assets/icons/LinkedinIcon.component";
import InstagramIcon from "../../../assets/icons/InstagramIcon.component";
import TwitterIcon from "../../../assets/icons/TwitterIcon.component";
import TiktokIcon from "../../../assets/icons/TiktokIcon.component";
import WebIcon from "../../../assets/icons/WebIcon.component";
import TelegramIcon from "../../../assets/icons/TelegramIcon.component";
import FacebookIcon from "../../../assets/icons/FacebookIcon.component";
import TwitchIcon from "../../../assets/icons/TwitchIcon.component";
import PinterestIcon from "../../../assets/icons/PinterestIcon.component";
import RedditIcon from "../../../assets/icons/RedditIcon.component";
import SpotifyIcon from "../../../assets/icons/SpotifyIcon.component";
import YoutubeIcon from "../../../assets/icons/YoutubeIcon.component";

interface IProps {
  label: string;
  icon: string;
  onClick: () => void;
}

function getIconByName(name: string) {
  switch (name) {
    case "votth":
      return <VotthLogo />;
    case "whatsapp":
      return <WhatsappIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "email":
      return <EmailIcon />;
    case "website":
      return <WebIcon />;
    case "youtube":
      return <YoutubeIcon />;
    case "spotify":
      return <SpotifyIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "tiktok":
      return <TiktokIcon />;
    case "reddit":
      return <RedditIcon />;
    case "pinterest":
      return <PinterestIcon />;
    case "twitch":
      return <TwitchIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "telegram":
      return <TelegramIcon />;
    default:
      return <VotthLogo />;
  }
}

function Button({ label, icon, onClick }: IProps) {
  return (
    <Container type="button" className="" onClick={() => onClick()}>
      {getIconByName(icon)}
      <Label>{label}</Label>
    </Container>
  );
}

export default Button;
