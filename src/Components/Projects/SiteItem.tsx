import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";

const SiteItem = (props: any) => {
  console.log(props);
  const { name, id, url, screenshot_url, created_at, updated_at } = props;
  const dateConvertor = (date: string) =>
    date.split("T")[0].split("-").reverse().join(".");

  return (
    <List
      sx={{
        maxWidth: 360,
      }}
    >
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            margin: "0 10px",
            width: "400px",
          }}
        >
          <Typography color="white">{name}</Typography>
          <Typography color="white">{`Create: ${dateConvertor(
            created_at
          )}`}</Typography>
          <Typography color="white">
            {` Update: ${dateConvertor(updated_at)}`}{" "}
          </Typography>
        </Box>
      </ListItem>
    </List>
  );
};

export default SiteItem;
