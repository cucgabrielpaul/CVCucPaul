import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import Sites from "../Components/Projects/Sites";
import projects from "../Assets/Image/Backgrounds/projects.jpg";

const Projects = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "110vh",
        backgroundImage: `url(${projects})`,
        backgroundSize: "container",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "50% 50%",
        backgroundAttachment: "fixed",
      }}
    >
      <DetailsCard />
      <NavBar />
      <Sites />
    </Box>
  );
};
export default Projects;
