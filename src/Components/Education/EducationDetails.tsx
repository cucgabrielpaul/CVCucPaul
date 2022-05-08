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
    <List
      sx={{
        paddingLeft: "5%",
      }}
    >
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
            <Avatar
              src={item.logo}
              alt="Logo"
              sx={{
                borderRadius: "0",
                width: "60px",
                height: "60px",
              }}
            />
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              paddingLeft: "20px",
            }}
          >
            <Typography color="white">{`${item.university} from ${item.city}`}</Typography>
            <Typography color="white">{item.college}</Typography>
            <Typography color="white">{`Date: ${item.startDate} - ${item.endDate}`}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default EducationDetails;
