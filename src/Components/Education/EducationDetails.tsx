import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import educationDet from "../../Data/educationDetData";

const EducationDetails = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {educationDet.map((item: any, index: number) => (
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
            <Typography>{`${item.university} from ${item.city}`}</Typography>
            <Typography>{item.college}</Typography>
            <Typography>{`Data: ${item.startDate} - ${item.endDate}`}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default EducationDetails;
