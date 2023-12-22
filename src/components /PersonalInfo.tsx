import { Button, TextField } from "@mui/material";

const PersonalInfo = () => {
  return (
    <div>
      <TextField variant="standard" label="Username" />
      <TextField variant="outlined" label="Email" type="email" />
      <TextField variant="filled" label="Password" type="password" />
      <Button component="a" href="">
        Save{" "}
      </Button>
    </div>
  );
};
export default PersonalInfo;
