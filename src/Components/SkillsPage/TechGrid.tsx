import { Box, Grid, Paper, styled } from "@mui/material";
import TechCard from "./TechCard";
import skills from "../../Data/techSkillsData";

const TechGrid = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {skills.map((infos: any) => (
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <TechCard {...infos} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechGrid;
