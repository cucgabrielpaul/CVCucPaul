import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import Sites from "../Components/Projects/Sites";
import projects from "../Assets/Image/Backgrounds/projects.jpg";

const Projects = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${projects})`,
        backgroundSize: "container",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "top",
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
