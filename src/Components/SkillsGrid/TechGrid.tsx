import { Box, Grid, Paper, styled } from "@mui/material";
import TechCard from "./TechCard";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiSass } from "@react-icons/all-files/si/SiSass";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiNpm } from "@react-icons/all-files/si/SiNpm";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { SiBabel } from "@react-icons/all-files/si/SiBabel";
import { SiGit } from "@react-icons/all-files/si/SiGit";

const infos = [
  {
    icon: <SiHtml5 />,
    iconColor: "#E34F26",
    primary: "HTML5",
    secondary: "City Cluj-Napoca, County Cluj",
    button: false,
    key: "Address",
    component: "",
    href: "",
  },
  {
    icon: <SiCss3 />,
    iconColor: "#1572B6",
    primary: "CSS3",
    secondary: "City Cluj-Napoca, County Cluj",
    button: false,
    key: "BornDate",
    component: "",
    href: "",
  },
  {
    icon: <SiSass />,
    iconColor: "#CC6699",
    primary: "SCSS",
    secondary: "",
    button: false,
    key: "Email",
    component: "",
    href: "",
  },
  {
    icon: <SiJavascript />,
    iconColor: "#F7DF1E",
    primary: "JavaScript ES6",
    secondary: "",
    button: false,
    key: "PhoneNo",
    component: "",
    href: "",
  },
  {
    icon: <SiTypescript />,
    iconColor: "#3178C6",
    primary: "TypeScript",
    secondary: "",
    button: false,
    key: "PhoneNo",
    component: "",
    href: "",
  },
  {},
  {
    icon: <SiReact />,
    iconColor: "#61DAFB",
    primary: "React JS",
    secondary: "",
    button: false,
    key: "PhoneNo",
    component: "",
    href: "",
  },
  {
    icon: <SiRedux />,
    iconColor: "#764ABC",
    primary: "Redux",
    secondary: "",
    button: false,
    key: "PhoneNo",
    component: "",
    href: "",
  },
  {
    icon: <SiNextDotJs />,
    iconColor: "#000000",
    primary: "Next JS",
    secondary: "",
    button: false,
    key: "PhoneNo",
    component: "",
    href: "",
  },
  {
    icon: <SiNpm />,
    iconColor: "#CB3837",
    primary: "NPM",
    secondary: "",
    button: false,
    key: "",
    component: "",
    href: "",
  },
  {
    icon: <SiWebpack />,
    iconColor: "#8DD6F9",
    primary: "WebPack",
    secondary: "",
    button: false,
    key: "",
    component: "",
    href: "",
  },
  {
    icon: <SiBabel />,
    iconColor: "#F9DC3E",
    primary: "Babel",
    secondary: "",
    button: false,
    key: "",
    component: "",
    href: "",
  },
  {
    icon: <SiGit />,
    iconColor: "#F05032",
    primary: "Babel",
    secondary: "",
    button: false,
    key: "",
    component: "",
    href: "",
  },
];

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
        {infos.map((infos: any) => (
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
