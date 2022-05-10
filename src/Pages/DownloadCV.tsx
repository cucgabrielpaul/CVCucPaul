import { Box } from "@mui/material";
import DetailsCard from "../Components/Details/DetailsCard";
import CvViewer from "../Components/DownloadCV/CvViewer";
import NavBar from "../Components/NavBar/NavBar";
import downloadcv from "../Assets/Image/Backgrounds/downloadcv.jpg";

const DownloadCV = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "110vh",
        backgroundImage: `url(${downloadcv})`,
        backgroundSize: "100%",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      <DetailsCard />
      <NavBar />
      <CvViewer />
    </Box>
  );
};

export default DownloadCV;
