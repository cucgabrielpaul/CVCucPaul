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
    color: "",
  },
  {
    icon: <FaBabyCarriage />,
    primary: "13/Sept/1992",
    secondary: "City Cluj-Napoca, County Cluj",
    button: false,
    key: "BornDate",
    component: "",
    href: "",
    color: "",
  },
  {
    icon: <AiFillYahoo />,
    primary: "cucgabrielpaul@yahoo.com",
    secondary: "",
    button: true,
    key: "Email",
    component: "a",
    href: "mailto:cucgabrielpaul@yahoo.com",
    color: "",
  },
  {
    icon: <MdPhone />,
    primary: "0755339912",
    secondary: "",
    button: true,
    key: "PhoneNo",
    component: "a",
    href: "tel:+40755339912",
    color: "",
  },
];
export default contactInfos;
