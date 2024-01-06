import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const PrincipalPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <ResponsiveAppBar />
        <Box
          sx={{
            marginTop: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Button
            component={Link}
            to="/SignUp"
            sx={{ mt: 3, mb: 2, width: "15%", height: "50px" }}
            variant="contained"
          >
            Create CV
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default PrincipalPage;
