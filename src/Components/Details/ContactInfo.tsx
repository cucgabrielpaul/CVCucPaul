import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { IconContext } from "@react-icons/all-files";

const ContactInfo = (props: any) => {
  const { infos } = props;
  console.log(infos);
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {infos.map((info: any) => (
        <ListItem
          button={info.button}
          key={info.key}
          component={info.component}
          href={info.href}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                background: "none",
                height: "50px",
                width: "50px",
              }}
            >
              <IconContext.Provider value={{ color: info.color, size: "35px" }}>
                {info.icon}
              </IconContext.Provider>
            </Avatar>
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              paddingLeft: "20px",
            }}
          >
            <Typography color="white">{info.primary}</Typography>
            <Typography color="white">{info.secondary}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactInfo;
