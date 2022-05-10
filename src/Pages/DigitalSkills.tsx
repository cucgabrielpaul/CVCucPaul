import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import TechGrid from "../Components/DigitalSkills/TechGrid";
import digitalskills from "../Assets/Image/Backgrounds/digitalskills.jpg";

const DigitalSkills = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "110vh",
        backgroundImage: `url(${digitalskills})`,
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      <DetailsCard />
      <NavBar />
      <TechGrid />
    </Box>
  );
};
export default DigitalSkills;
