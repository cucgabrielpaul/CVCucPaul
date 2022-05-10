import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";

const RepoItem = (props: any) => {
  const {
    name,
    id,
    description,
    topics,
    created_at,
    updated_at,
    html_url,
    visibility,
  } = props;

  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem button key={id} component="a" href={html_url} target="_blank">
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
            width: "400px",
          }}
        >
          <Typography color="white">{name}</Typography>
          <Typography color="white">{`${topics.join(", ")}`}</Typography>
        </Box>
      </ListItem>
    </List>
  );
};

export default RepoItem;
