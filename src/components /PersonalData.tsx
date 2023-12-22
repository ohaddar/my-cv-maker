import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | "";
  address: string;
  postalCode: number | "";
  city: string;
  birthday: number | "";
  birthCity: string;
  sex: string;
  maritalStatus: string;
  nationality: string;
  linkedin: string;
  internetSite: string;
  drivinglicense: string;
}
const PersonalData = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    city: "",
    birthday: "",
    birthCity: "",
    sex: "",
    maritalStatus: "",
    nationality: "",
    linkedin: "",
    internetSite: "",
    drivinglicense: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setFormValues(formValues);
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container
        sx={{
          height: "100vh",
          marginTop: "100px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">First Name</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={formValues.firstName}
              onChange={(e) =>
                setFormValues({ ...formValues, firstName: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Last Name </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Family Name"
              value={formValues.lastName}
              onChange={(e) =>
                setFormValues({ ...formValues, lastName: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <FormControl>
            <InputLabel htmlFor="component-outlined">Email </InputLabel>
            <OutlinedInput
              id="component-outlined"
              type="email"
              label="Email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Phone Number </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Phone Number "
              value={formValues.phoneNumber}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  phoneNumber: e.target.value as number | "",
                })
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <FormControl>
            <InputLabel htmlFor="component-outlined">Adresse </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Adresse"
              value={formValues.address}
              onChange={(e) =>
                setFormValues({ ...formValues, address: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Postal Code </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Postal Code "
              value={formValues.postalCode}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  postalCode: e.target.value as number | "",
                })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">City </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="City"
              value={formValues.city}
              onChange={(e) =>
                setFormValues({ ...formValues, city: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <FormControl>
            <InputLabel htmlFor="component-outlined">Birthday </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Birthday"
              value={formValues.birthday}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  birthday: e.target.value as number | "",
                })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Birthcity </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Birthcity"
              value={formValues.birthCity}
              onChange={(e) =>
                setFormValues({ ...formValues, birthCity: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <FormControl>
            <InputLabel htmlFor="component-outlined">
              Driving license{" "}
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Driving license"
              value={formValues.drivinglicense}
              onChange={(e) =>
                setFormValues({ ...formValues, drivinglicense: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <FormControl>
            <InputLabel htmlFor="component-outlined">Sex </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Sex"
              value={formValues.sex}
              onChange={(e) =>
                setFormValues({ ...formValues, sex: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Nationality </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Nationality"
              value={formValues.nationality}
              onChange={(e) =>
                setFormValues({ ...formValues, nationality: e.target.value })
              }
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="component-outlined">
              Marital status{" "}
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Marital status"
              value={formValues.maritalStatus}
              onChange={(e) =>
                setFormValues({ ...formValues, maritalStatus: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <FormControl>
            <InputLabel htmlFor="component-outlined">Linkedin </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Linkedin"
              value={formValues.linkedin}
              onChange={(e) =>
                setFormValues({ ...formValues, linkedin: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">
              {" "}
              Internet Site{" "}
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              label=" Internet Site "
              value={formValues.internetSite}
              onChange={(e) =>
                setFormValues({ ...formValues, internetSite: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Button variant="contained" size="medium" type="submit">
          Confirm
        </Button>
      </Container>
    </form>
  );
};

export default PersonalData;
