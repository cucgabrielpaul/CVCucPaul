import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import NavBar from "../Components/NavBar/NavBar";
import RepoDetails from "../Components/RepoPage/RepoDetails";

const Repositorys = () => {
  return (
    <Box>
      <DetailsCard />
      <NavBar />
      <RepoDetails />
    </Box>
  );
};
export default Repositorys;
