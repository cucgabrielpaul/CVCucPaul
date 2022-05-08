import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import WorkExp from "../Components/WorkExp/WorkExp";
import workexp from "../Assets/Image/Backgrounds/workexp.jpg";

const WorkExperience = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${workexp})`,
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      <DetailsCard />
      <NavBar />
      <WorkExp />
    </Box>
  );
};
export default WorkExperience;
