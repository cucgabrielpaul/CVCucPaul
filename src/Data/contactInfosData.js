import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps";
import { AiFillYahoo } from "@react-icons/all-files/ai/AiFillYahoo";
import { FcCallback } from "@react-icons/all-files/fc/FcCallback";
import { FaBabyCarriage } from "@react-icons/all-files/fa/FaBabyCarriage";

const contactInfos = [
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
export default contactInfos;
