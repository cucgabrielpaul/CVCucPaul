import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import sites from "../../Data/sitesData";
import SiteItem from "./SiteItem";

const Sites = () => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {sites.map((element: any) => (
        <Grid item xs={12} sm={6} md={4}>
          <SiteItem key={element.id} {...element} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Sites;
