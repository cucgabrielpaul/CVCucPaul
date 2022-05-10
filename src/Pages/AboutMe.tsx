import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import aboutme from "../Assets/Image/Backgrounds/aboutme.jpg";
import AboutMeInfo from "../Components/AboutMe/AboutMeInfo";
const AboutMe = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "110vh",
        backgroundImage: `url(${aboutme})`,
        backgroundSize: "container",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "50% 30%",
        backgroundAttachment: "fixed",
      }}
    >
      <DetailsCard />
      <NavBar />
      <AboutMeInfo />
    </Box>
  );
};
export default AboutMe;
