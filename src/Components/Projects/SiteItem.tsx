import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";

const SiteItem = (props: any) => {
  const { name, url, screenshot_url, created_at, updated_at } = props;

  const dateConvertor = (date: string) =>
    date.split("T")[0].split("-").reverse().join(".");

  return (
    <List
      sx={{
        maxWidth: 360,
      }}
    >
      <ListItem button component="a" href={url} target="_blank">
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
            minWidth: "400px",
          }}
        >
          <Typography color="white">{name.toUpperCase()}</Typography>
          <Typography color="white">
            {`Create : ${dateConvertor(created_at)}`}
          </Typography>
          <Typography color="white">
            {`Update: ${dateConvertor(updated_at)}`}
          </Typography>
        </Box>
      </ListItem>
    </List>
  );
};

export default SiteItem;
