import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyAvatar from "./MyAvatar";
import ContactInfo from "./ContactInfo";
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps";
import { AiFillYahoo } from "@react-icons/all-files/ai/AiFillYahoo";
import { FcCallback } from "@react-icons/all-files/fc/FcCallback";
import { FaBabyCarriage } from "@react-icons/all-files/fa/FaBabyCarriage";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  position: "absolute",
  height: "50px",
  width: "50px",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginRight: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const infos = [
  {
    icon: <SiGooglemaps />,
    primary: "Str. Observatorului, Nr.13",
    secondary: "City Cluj-Napoca, County Cluj",
    button: false,
    key: "Address",
    component: "",
    href: "",
  },
  {
    icon: <FaBabyCarriage />,
    primary: "13/Sept/1992",
    secondary: "City Cluj-Napoca, County Cluj",
    button: false,
    key: "BornDate",
    component: "",
    href: "",
  },
  {
    icon: <AiFillYahoo />,
    primary: "cucgabrielpaul@yahoo.com",
    secondary: "",
    button: true,
    key: "Email",
    component: "a",
    href: "mailto:cucgabrielpaul@yahoo.com",
  },
  {
    icon: <FcCallback />,
    primary: "0755339912",
    secondary: "",
    button: true,
    key: "PhoneNo",
    component: "a",
    href: "tel:+40755339912",
  },
];

const socialMedia = [
  {
    icon: <SiFacebook />,
    primary: "Facebook",
    secondary: "www.facebook.com/cucgabrielpaul",
    button: true,
    key: "Facebook",
    component: "a",
    href: "https://www.facebook.com/cucgabrielpaul/",
  },
  {
    icon: <SiInstagram />,
    primary: "Instagram",
    secondary: "www.instagram.com/cucgabrielpaul",
    button: true,
    key: "Instagram",
    component: "a",
    href: "https://www.instagram.com/cucgabrielpaul/",
  },
  {
    icon: <SiLinkedin />,
    primary: "LinkedIn",
    secondary: "www.linkedin.com/in/cucgabrielpaul",
    button: true,
    key: "LinkedIn",
    component: "a",
    href: "https://www.linkedin.com/in/cucgabrielpaul/",
  },
  {
    icon: <SiGithub />,
    primary: "GitHub",
    secondary: "https://github.com/cucgabrielpaul",
    button: true,
    key: "GitHub",
    component: "a",
    href: "https://github.com/cucgabrielpaul",
  },
];

const DetailsCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="More Info"
      >
        <ExpandMoreIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardActions
          sx={{
            display: "flex",
            flexDirectionr: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <MyAvatar />
          <ContactInfo infos={infos} />
          <ContactInfo infos={socialMedia} />
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default DetailsCard;
