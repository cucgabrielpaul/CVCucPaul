import { Description } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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
  console.log(description);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem button key={id} component="a" href={html_url}>
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
        <ListItemText primary={name} secondary={topics.join(", ")} />
      </ListItem>
    </List>
  );
};

export default RepoItem;
