import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { IconContext } from "@react-icons/all-files";

const TechCard = (props: any) => {
  const { button, key, component, href, icon, primary, secondary, iconColor } =
    props;
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem button={button} key={key} component={component} href={href}>
        <ListItemAvatar>
          <Avatar
            sx={{
              background: "none",
              color: "red",
              height: "100px",
              width: "100px",
            }}
          >
            <IconContext.Provider value={{ color: iconColor, size: "70px" }}>
              {icon}
            </IconContext.Provider>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    </List>
  );
};

export default TechCard;
