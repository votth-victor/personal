import { ButtonIcon, Container, Label } from "./Button.styles";

interface IProps {
  label: string;
  icon: string;
  onClick: () => void;
}

const VotthIcon = require("../../../assets/icons/votth_16x16.png");
const WhatsappIcon = require("../../../assets/icons/whatsapp_16x16.png");
const LinkedinIcon = require("../../../assets/icons/linkedin_16x16.png");
const InstagramIcon = require("../../../assets/icons/instagram_16x16.png");
const EmailIcon = require("../../../assets/icons/email_16x16.png");

function getIconByName(name: string) {
  switch (name) {
    case "website":
      return VotthIcon;
    case "whatsapp":
      return WhatsappIcon;
    case "linkedin":
      return LinkedinIcon;
    case "instagram":
      return InstagramIcon;
    case "email":
      return EmailIcon;
    default:
      return VotthIcon;
  }
}

function Button({ label, icon, onClick }: IProps) {
  return (
    <Container type="button" className="" onClick={() => onClick()}>
      <ButtonIcon
        src={getIconByName(icon)}
        height={16}
        width={16}
        draggable={false}
      />
      <Label>{label}</Label>
    </Container>
  );
}

export default Button;
