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
export default socialMedia;
