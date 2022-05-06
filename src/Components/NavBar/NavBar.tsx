import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DropDownBtn from "./DropDownBtn";
import MenuBtn from "./MenuBtn";
import pages from "../../Data/pagesData";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ margin: "0 50px" }}>
        <Toolbar>
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
