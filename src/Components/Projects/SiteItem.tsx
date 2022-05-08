import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const SiteItem = (props: any) => {
  console.log(props);
  const { name, id, url, screenshot_url } = props;
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem button key={id} component="a" href={url}>
        <ListItemAvatar>
          <Avatar
            alt={name}
            src={screenshot_url}
            sx={{
              borderRadius: "2px",
              height: "80px",
              width: "100px",
            }}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={""} />
      </ListItem>
    </List>
  );
};

export default SiteItem;
