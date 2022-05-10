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
    <List>
      {workExp.map((item: any, index: number) => (
        <ListItem
          button={item.button}
          key={index}
          component={item.component}
          href={item.href}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
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
              marginRight: "15%",
              width: "400px",
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
