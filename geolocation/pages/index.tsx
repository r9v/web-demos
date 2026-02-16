import type { NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Nav from "../components/Nav";
import Geo from "../components/Geo";

const Home: NextPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Nav />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Geo />
      </Box>
    </Box>
  );
};

export default Home;
