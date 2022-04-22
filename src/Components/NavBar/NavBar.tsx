import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DropDownBtn from "./DropDownBtn";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import ImportantDevicesRoundedIcon from "@mui/icons-material/ImportantDevicesRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import MenuBtn from "./MenuBtn";

const pages = [
  {
    icon: <HomeIcon />,
    name: "Home",
    link: "/",
  },
  {
    icon: <AccountCircleRoundedIcon />,
    name: "AboutMe",
    link: "/AboutMe",
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
    name: "Digital Skill",
    link: "/DigitalSkills",
  },
];

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Cuc PauL
          </Typography>

          <DropDownBtn pages={pages} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Cuc PauL
          </Typography>
          <MenuBtn pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
