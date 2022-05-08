import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import DropDownBtn from "./DropDownBtn";
import MenuBtn from "./MenuBtn";
import pages from "../../Data/pagesData";
import navBg from "../../Assets/Video/navBg.gif";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "centre",
        height: "65px",
        backgroundImage: `url(${navBg})`,
      }}
    >
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{
          fontFamily: "Gabriola",
          mr: 2,
          display: { xs: "none", md: "flex" },
          alignSelf: "center",
          margin: "0 0 0 100px",
        }}
      >
        {window.innerWidth < 1000 ? "" : "CV Cuc Paul"}
      </Typography>

      <DropDownBtn pages={pages} />
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{
          fontFamily: "Gabriola",
          display: { xs: "flex", md: "none" },
          alignSelf: "center",
          margin: "0 50px 0 0",
        }}
      >
        {"CV Cuc Paul"}
      </Typography>
      <MenuBtn pages={pages} />
    </AppBar>
  );
};
export default NavBar;
