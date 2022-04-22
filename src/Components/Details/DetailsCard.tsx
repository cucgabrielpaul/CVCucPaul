import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyAvatar from "./MyAvatar";
import SocialMedia from "./SocialMedia";
import ContactInfo from "./ContactInfo";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  position: "absolute",
  height: "50px",
  width: "50px",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginRight: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DetailsCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="More Info"
      >
        <ExpandMoreIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardActions
          sx={{
            display: "flex",
            flexDirectionr: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <MyAvatar />
          <ContactInfo />
          <SocialMedia />
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default DetailsCard;
