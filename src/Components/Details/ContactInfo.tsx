import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { IconContext } from "react-icons";

const ContactInfo = (props: any) => {
  const { infos } = props;
  console.log(infos);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {infos.map((info: any) => (
        <ListItem
          button={info.button}
          key={info.key}
          component={info.component}
          href={info.href}
        >
          <ListItemAvatar>
            <Avatar>
              <IconContext.Provider value={{ color: info.color, size: "70px" }}>
                {info.icon}
              </IconContext.Provider>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={info.primary} secondary={info.secondary} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactInfo;
