import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBtn = (props: any) => {
  const { pages } = props;
  return (
    <ButtonGroup
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {pages.map((page: any) => (
        <Button
          key={page.name}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            "&:hover": {
              backgroundColor: "#333",
            },
            borderRadius: "4px",
          }}
        >
          <Link
            style={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
              color: "white",
            }}
            to={page.link}
          >
            {page.icon}
            {page.name}
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default MenuBtn;
