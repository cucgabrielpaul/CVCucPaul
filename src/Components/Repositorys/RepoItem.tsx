import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";

const RepoItem = (props: any) => {
  const { name, description, topics, created_at, updated_at, html_url } = props;

  const dateConvertor = (date: string) =>
    date.split("T")[0].split("-").reverse().join(".");

  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem button component="a" href={html_url} target="_blank">
        <ListItemAvatar>
          <Avatar
            alt={name}
            src={description}
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
          <Typography color="white">{`${topics.join(", ")}`}</Typography>
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

export default RepoItem;
