import LockPersonIcon from "@mui/icons-material/LockPerson";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <Avatar sx={{ m: 3, bgcolor: "info.main" }}>
        <LockPersonIcon></LockPersonIcon>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            ></TextField>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              autoFocus
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              autoFocus
            ></TextField>
          </Grid>
          <Grid item xs={8}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          component={Link}
          to="/PersonalData"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item></Grid>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Grid item></Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default SignUp;
