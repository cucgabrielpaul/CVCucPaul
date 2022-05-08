import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MyAvatar from "./MyAvatar";
import ContactInfo from "./ContactInfo";
import contactInfos from "../../Data/contactInfosData";
import socialMedia from "../../Data/socialMediaData";
import Profil from "../../Assets/Image/Profil.jpg";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  height: "50px",
  width: "50px",
  "&:hover": {
    background: "",
  },
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
    <Card
      sx={{
        backgroundImage: `url(${Profil})`,
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "50% 48%",
      }}
    >
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="More Info"
      >
        <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardActions
          sx={{
            display: "flex",
            flexDirectionr: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <ContactInfo infos={contactInfos} />
          <ContactInfo infos={socialMedia} />
          <MyAvatar />
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default DetailsCard;
