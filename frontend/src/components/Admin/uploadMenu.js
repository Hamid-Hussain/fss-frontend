import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { styled } from "@mui/material/styles";

import FileInput from "./uploadImage";

const currencies = [
  {
    value: "monday",
    label: "Monday",
  },
  {
    value: "tuesday",
    label: "Tuesday",
  },
  {
    value: "wednesday",
    label: "Wednesday",
  },
  {
    value: "thursday",
    label: "Thursday",
  },
  {
    value: "friday",
    label: "Friday",
  },
  {
    value: "saturday",
    label: "Saturday",
  },
  {
    value: "sunday",
    label: "Sunday",
  },
];
let menuJson = [];

const Input = styled("input")({
  display: "none",
});

export default function UploadMenu() {
  const [age, setAge] = React.useState("");

  const [currency, setCurrency] = React.useState("monday");
  const [menu, setMenu] = useState({
    menu: [{ day: "monday", dish: "biryani" }],
  });

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const handleSubmit = (event, dish, day) => {
    event.preventDefault();

    console.log(event, event.target.velue, dish, day);
  };

  const validationSchema = yup.object({
    day: yup
      .string("Enter your email")
      // .email("Enter a valid email")
      .required("Email is required"),
    dish: yup
      .string("Enter your password")
      // .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      day: "monday",
      dish: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("onsubmit");
      const { day, dish } = values;

      console.log({
        day,
        dish,
      });
      let obj = {
        day: day,
        dish: dish,
      };
      console.log(obj, menuJson);
      menu.menu.push(obj);
      menuJson.push(obj);

      getCard();
      console.log(menu.menu);
      // setMenu(menu.menu.push(obj));

      // console.log(menu);

      // const loginData = {
      //   email,
      //   password,
      // };

      //   dispatch(loginAsync(loginData))
    },
  });
  const getCard = () => {
    return (
      <Box>
        {menuJson.map((menu) => {
          <p>{menu.day}</p>;
        })}
        fkdsjaflsd
      </Box>
    );
  };

  React.useEffect(() => {
    console.log(menu.menu);
  }, [menu.menu.length]);

  return (
    <div>
      {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}> */}

      <Box component="form" onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              name="day"
              value="monday"
              onChange={handleChange}
              helperText="Please select the day"
              sx={{ mt: "30px" }}
              value={formik.values.day}
              onChange={formik.handleChange}
              error={formik.touched.day && Boolean(formik.errors.day)}
              helperText={formik.touched.day && formik.errors.day}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="dish"
              label="Dish"
              name="dish"
              autoComplete="dish"
              autoFocus
              sx={{ py: "10px" }}
              value={formik.values.dish}
              onChange={formik.handleChange}
              error={formik.touched.dish && Boolean(formik.errors.dish)}
              helperText={formik.touched.dish && formik.errors.dish}
            />
          </Grid>
          {/* <Grid> */}

          {/* </Grid> */}
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "start", pl: "100px" }}>
              <FileInput />
            </Box>
          </Grid>
          {/* <Grid item xs={6}>
            
          </Grid> */}
        </Grid>

        {/* {getCard()} */}
        {menu.menu.map((choice) => {
          <p>{menu.menu.day}</p>;
        })}

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button variant="contained" type="submit">
            Contained
          </Button>
        </Box>
      </Box>
      {/* </FormControl> */}
    </div>
  );
}
