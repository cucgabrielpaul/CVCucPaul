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
    shortName: "Me",
    longName: "About Me",
    link: "/",
  },
  {
    icon: <SchoolRoundedIcon />,
    shortName: "Education",
    longName: "Education",
    link: "/Education",
  },
  {
    icon: <WorkHistoryRoundedIcon />,
    shortName: "Work",
    longName: "Work Experience",
    link: "/WorkExperience",
  },
  {
    icon: <ImportantDevicesRoundedIcon />,
    shortName: "Projects",
    longName: "Projects",
    link: "/Projects",
  },
  {
    icon: <TerminalRoundedIcon />,
    shortName: "Repos",
    longName: "Repositorys",
    link: "/Repositorys",
  },
  {
    icon: <CodeRoundedIcon />,
    shortName: "Skills",
    longName: "Skills",
    link: "/DigitalSkills",
  },
  {
    icon: <DownloadIcon />,
    shortName: "CV",
    longName: "Download CV",
    link: "/DownloadCV",
  },
];
export default pages;
