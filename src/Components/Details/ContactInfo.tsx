import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ContactInfo = (props: any) => {
  const { infos } = props;

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
            <Avatar>{info.icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={info.primary} secondary={info.secondary} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactInfo;
