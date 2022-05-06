import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import workExp from "../../Data/workExpData";

const WorkExp = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
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
              alignItems: "center",
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
