import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps";
import { AiFillYahoo } from "@react-icons/all-files/ai/AiFillYahoo";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
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
    color: "rgb(203,51,62)",
  },
  {
    icon: <FaBabyCarriage />,
    primary: "13/Sept/1992",
    secondary: "City Cluj-Napoca, County Cluj",
    button: false,
    key: "BornDate",
    component: "",
    href: "",
    color: "rgb(9,105,218)",
  },
  {
    icon: <AiFillYahoo />,
    primary: "cucgabrielpaul@yahoo.com",
    secondary: "",
    button: true,
    key: "Email",
    component: "a",
    href: "mailto:cucgabrielpaul@yahoo.com",
    color: "rgb(100,15,108)",
  },
  {
    icon: <MdPhone />,
    primary: "0755339912",
    secondary: "",
    button: true,
    key: "PhoneNo",
    component: "a",
    href: "tel:+40755339912",
    color: "rgb(4,170,109)",
  },
];
export default contactInfos;
