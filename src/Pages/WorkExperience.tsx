import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import WorkExp from "../Components/WorkExperience/WorkExp";
import workexp from "../Assets/Image/Backgrounds/workexp.jpg";

const WorkExperience = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "110vh",
        backgroundImage: `url(${workexp})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "50% 90%",
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
