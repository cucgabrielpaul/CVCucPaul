import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBtn = (props: any) => {
  const { pages } = props;
  return (
    <ButtonGroup
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        m: "0 auto",
      }}
    >
      {pages.map((page: any) => (
        <Button
          key={page.name}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          <Link
            to={page.link}
            style={{ textDecoration: "none", color: "white" }}
          >
            {page.name}
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default MenuBtn;
