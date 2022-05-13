import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SiteItem from "./SiteItem";

const Sites = () => {
  const [sites, setSites] = useState<any>([]);
  const baseURL = "https://api.netlify.com/api/v1/sites";
  const Authorization = "Bearer zZ9BprHUKsV1ncZt8_ekkpp_8D3Y0Fum6MqLCg4Bj0A";

  useEffect(() => {
    try {
      fetch(baseURL, {
        method: "GET",
        headers: {
          Authorization: Authorization,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSites(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {sites.map((element: any) => (
        <Grid key={element.id} item xs={12} sm={6} md={4}>
          <SiteItem {...element} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Sites;
