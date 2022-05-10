import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import EducationDetails from "../Components/Education/EducationDetails";
import NavBar from "../Components/NavBar/NavBar";
import education from "../Assets/Image/Backgrounds/education.jpg";

const Education = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "110vh",
        backgroundImage: `url(${education})`,
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "50% 1%",
        backgroundAttachment: "fixed",
      }}
    >
      <DetailsCard />
      <NavBar />
      <EducationDetails />
    </Box>
  );
};

export default Education;
