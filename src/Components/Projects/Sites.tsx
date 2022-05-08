import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import sites from "../../Data/sitesData";
import projects from "../../Assets/Image/Backgrounds/projects.jpg";
import SiteItem from "./SiteItem";

const Sites = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        backgroundImage: `url(${projects})`,
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {sites.map((item: any) => (
          <Grid item xs={12} sm={6} md={4}>
            <SiteItem key={item.id} {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sites;
