import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DropDownBtn from "./DropDownBtn";
import MenuBtn from "./MenuBtn";
import pages from "../../Data/pagesData";
import navBg from "../../Assets/Video/navBg.gif";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundImage: `url(${navBg})` }}>
      <Container maxWidth="xl" sx={{ margin: "0 50px" }}>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              fontFamily: "Gabriola",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            CV Cuc Paul
          </Typography>

          <DropDownBtn pages={pages} />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              fontFamily: "Gabriola",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            CV Cuc Paul
          </Typography>
          <MenuBtn pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
