import {
  FormControlLabel,
  List,
  ListItem,
  TextField,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function FormContactInformation() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <form
      style={{
        backgroundColor: "#EAEAEA",
        textAlign: "center",
        minWidth: 300,
      }}
    >
      <Typography>More about this property</Typography>
      <List>
        <ListItem>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                id="fullName"
                label="Full Name"
                inputProps={{ type: "fullName" }}
                error={Boolean(errors.fullName)}
                helperText={
                  errors.fullName
                    ? errors.fullName.type === "minLength"
                      ? "Full Name is more than 1"
                      : "Full Name is required"
                    : ""
                }
                InputProps={{
                  startAdornment: <PersonOutlineOutlinedIcon />,
                }}
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            }}
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
                error={Boolean(errors.email)}
                helperText={
                  errors.email
                    ? errors.email.type === "pattern"
                      ? "Email is not valid"
                      : "Email is required"
                    : ""
                }
                InputProps={{
                  startAdornment: <EmailIcon />,
                }}
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 10,
            }}
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                id="phone"
                label="Phone"
                type="number"
                inputProps={{ type: "phone" }}
                error={Boolean(errors.phone)}
                helperText={
                  errors.phone
                    ? errors.phone.type === "minLength"
                      ? "Phone is more than 9"
                      : "Phone is required"
                    : ""
                }
                InputProps={{
                  startAdornment: <LocalPhoneIcon />,
                }}
                {...field}
              ></TextField>
            )}
          ></Controller>
        </ListItem>
        <ListItem>
          <TextField fullWidth variant="outlined" id="message"></TextField>
        </ListItem>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Get pre-approved by a lender."
        />
        <ListItem>
          <Button variant="contained" color="primary" fullWidth>
            Email Agent
          </Button>
        </ListItem>
      </List>
    </form>
  );
}
