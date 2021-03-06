import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";

const socialMedia = [
  {
    icon: <SiFacebook />,
    primary: "Facebook",
    secondary: "www.facebook.com/cucgabrielpaul",
    button: true,
    key: "Facebook",
    component: "a",
    href: "https://www.facebook.com/cucgabrielpaul/",
    target: "_blank",
    color: "rgb(9,124,235)",
  },
  {
    icon: <SiInstagram />,
    primary: "Instagram",
    secondary: "www.instagram.com/cucgabrielpaul",
    button: true,
    key: "Instagram",
    component: "a",
    href: "https://www.instagram.com/cucgabrielpaul/",
    target: "_blank",
    color: "rgb(219,18,50)",
  },
  {
    icon: <SiLinkedin />,
    primary: "LinkedIn",
    secondary: "www.linkedin.com/in/cucgabrielpaul",
    button: true,
    key: "LinkedIn",
    component: "a",
    href: "https://www.linkedin.com/in/cucgabrielpaul/",
    target: "_blank",
    color: "rgb(2,112,173)",
  },
  {
    icon: <SiGithub />,
    primary: "GitHub",
    secondary: "https://github.com/cucgabrielpaul",
    button: true,
    key: "GitHub",
    component: "a",
    href: "https://github.com/cucgabrielpaul",
    target: "_blank",
    color: "white",
  },
];
export default socialMedia;
