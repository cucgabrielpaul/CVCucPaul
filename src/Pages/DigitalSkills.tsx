import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import TechGrid from "../Components/SkillsPage/TechGrid";
import digitalskills from "../Assets/Image/Backgrounds/digitalskills.jpg";

const DigitalSkills = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
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
