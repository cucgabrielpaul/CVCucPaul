import { Avatar, CardActions, Typography } from "@mui/material";
import img from "../../Assets/Image/Avatar.jpg";

const MyAvatar = () => {
  return (
    <CardActions
      sx={{ display: "flex", flexDirection: "column", maxWidth: "320px" }}
    >
      <Avatar
        alt="Cuc Paul"
        src={img}
        sx={{ borderRadius: "50%", height: "200px", width: "200px" }}
      />
      <Typography variant="h5" color="text.secondary">
        Cuc Gabriel Paul
      </Typography>
    </CardActions>
  );
};

export default MyAvatar;
