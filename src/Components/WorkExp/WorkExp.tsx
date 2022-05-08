import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import workExp from "../../Data/workExpData";
import workexp from "../../Assets/Image/Backgrounds/workexp.jpg";

const WorkExp = () => {
  return (
    <List
      sx={{
        height: "100vh",
        paddingLeft: "50%",
        bgcolor: "background.paper",
        backgroundImage: `url(${workexp})`,
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      {workExp.map((item: any, index: number) => (
        <ListItem
          button={item.button}
          key={index}
          component={item.component}
          href={item.href}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ListItemAvatar>
            <Avatar src={item.logo} alt="Logo" />
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>{`${item.employer} from ${item.city}`}</Typography>
            <Typography>{item.jobPosition}</Typography>
            <Typography>{`Data: ${item.startDate} - ${item.endDate}`}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default WorkExp;
