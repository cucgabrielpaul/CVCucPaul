import Grid from "@mui/material/Grid";
import RepoItem from "./RepoItem";
import { useEffect, useState } from "react";

const RepoDetails = () => {
  const [repos, setRepos] = useState<any>([]);
  const [sites, setSites] = useState<any>([]);

  const netlifyBaseURL = "https://api.netlify.com/api/v1/sites";
  const Authorization = "Bearer zZ9BprHUKsV1ncZt8_ekkpp_8D3Y0Fum6MqLCg4Bj0A";
  const gitHubBaseURL = "https://api.github.com/users/cucgabrielpaul/repos";
  useEffect(() => {
    fetch(gitHubBaseURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ii bai cu GitHub Api");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(netlifyBaseURL, {
      method: "GET",
      headers: {
        Authorization: Authorization,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ii bai cu Netlify Api");
        }
        return res.json();
      })
      .then((data) => {
        setSites(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(repos, sites);

  /*  const { data, error, loading } = useAxios({
    url: "https://api.github.com/users/cucgabrielpaul/repos",
  });
  if (loading) console.log("Loading...");
  if (data) setData(data);
  if (error) console.log("Error!"); */

  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {repos.map((repo: any) => (
        <Grid key={repo.id} item xs={12} sm={6} md={4}>
          <RepoItem {...repo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RepoDetails;
