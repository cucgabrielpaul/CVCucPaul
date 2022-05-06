import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useAxios } from "use-axios-client";
import RepoItem from "./RepoItem";
import { useEffect, useState } from "react";

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
    <Box sx={{ width: "100%" }}>
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
