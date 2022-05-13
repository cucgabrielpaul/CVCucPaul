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
    <List key={key} sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem button={button} component={component} href={href}>
        <ListItemAvatar>
          <Avatar
            sx={{
              background: "none",
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
