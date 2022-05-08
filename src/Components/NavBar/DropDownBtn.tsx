import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

const DropDownBtn = (props: any) => {
  const { pages } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        marginLeft: "50px",
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page: any) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Link
              style={{
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
                color: "rgb(9,105,218)",
              }}
              to={page.link}
              download={true}
            >
              {page.icon}
              {page.longName}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default DropDownBtn;
