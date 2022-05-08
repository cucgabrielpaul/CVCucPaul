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
            border: "0",
            borderRadius: "0",
            display: "block",
            "&:hover": {
              border: "1px solid white",
            },
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
            {window.innerWidth > 1300 ? page.longName : page.shortName}
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default MenuBtn;
