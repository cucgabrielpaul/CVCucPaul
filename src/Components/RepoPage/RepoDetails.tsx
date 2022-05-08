import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useAxios } from "use-axios-client";
import RepoItem from "./RepoItem";
import { useEffect, useState } from "react";
import repository from "../../Assets/Video/tech.gif";

const RepoDetails = () => {
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/cucgabrielpaul/repos").then(
      (response) => response.json().then((data) => setRepos(data))
    );
  }, []);

  /*  const { data, error, loading } = useAxios({
    url: "https://api.github.com/users/cucgabrielpaul/repos",
  });
  if (loading) console.log("Loading...");
  if (data) setData(data);
  if (error) console.log("Error!"); */

  return (
    <Box
      sx={{
        height: "100vh",
        position: "absolute",
        backgroundImage: `url(${repository})`,
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
        {repos.map((repo: any) => (
          <Grid item xs={12} sm={6} md={4}>
            <RepoItem key={repo.id} {...repo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RepoDetails;
