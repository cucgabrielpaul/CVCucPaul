import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import EducationDetails from "../Components/Education/EducationDetails";
import NavBar from "../Components/NavBar/NavBar";

const Education = () => {
  return (
    <Box>
      <DetailsCard />
      <NavBar />
      <EducationDetails />
    </Box>
  );
};

export default Education;
