import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps";
import { AiFillYahoo } from "@react-icons/all-files/ai/AiFillYahoo";
import { FcCallback } from "@react-icons/all-files/fc/FcCallback";
import { FaBabyCarriage } from "@react-icons/all-files/fa/FaBabyCarriage";

const ContactInfo = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SiGooglemaps />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Str. Observatorului, Nr.13"
          secondary="City Cluj-Napoca, County Cluj"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaBabyCarriage />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="09/Sept/1992"
          secondary="City Cluj-Napoca, County Cluj"
        />
      </ListItem>
      <ListItem
        button
        key="Email"
        component="a"
        href="mailto:cucgabrielpaul@yahoo.com"
      >
        <ListItemAvatar>
          <Avatar>
            <AiFillYahoo />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="cucgabrielpaul@yahoo.com" />
      </ListItem>
      <ListItem button key="Phone" component="a" href="tel:+40755339912">
        <ListItemAvatar>
          <Avatar>
            <FcCallback />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="0755339912" />
      </ListItem>
    </List>
  );
};

export default ContactInfo;
