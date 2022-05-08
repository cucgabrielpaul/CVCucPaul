import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import ImportantDevicesRoundedIcon from "@mui/icons-material/ImportantDevicesRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DownloadIcon from "@mui/icons-material/Download";

const pages = [
  {
    icon: <AccountCircleRoundedIcon />,
    name: "AboutMe",
    link: "/",
  },
  {
    icon: <SchoolRoundedIcon />,
    name: "Education",
    link: "/Education",
  },
  {
    icon: <WorkHistoryRoundedIcon />,
    name: "Work Experince",
    link: "/WorkExperience",
  },
  {
    icon: <ImportantDevicesRoundedIcon />,
    name: "Projects",
    link: "/Projects",
  },
  {
    icon: <TerminalRoundedIcon />,
    name: "Repositorys",
    link: "/Repositorys",
  },
  {
    icon: <CodeRoundedIcon />,
    name: "Digital Skills",
    link: "/DigitalSkills",
  },
  {
    icon: <DownloadIcon />,
    name: "Download CV",
    link: "/DownloadCV",
  },
];
export default pages;
