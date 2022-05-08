import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import RepoDetails from "../Components/RepoPage/RepoDetails";
import repository from "../Assets/Image/Backgrounds/repository.jpg";

const Repositorys = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${repository})`,
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      <DetailsCard />
      <NavBar />
      <RepoDetails />
    </Box>
  );
};
export default Repositorys;
