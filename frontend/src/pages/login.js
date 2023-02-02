import React, { useEffect } from "react";

// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { flexbox } from "@mui/system";

import { useFormik } from "formik";
import * as yup from "yup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import btnTheme from "../Themes/clientSideThemes";
import classes from "./login.module.css";
import AppBar from "../components/AppBar";
import Footer from "../components/common/Footer";

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: "1rem",
//         },
//       },
//     },
//   },
// });

const Login = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("onsubmit");
      const { email, password } = values;

      console.log({
        email,
        password,
      });
      const loginData = {
        email,
        password,
      };

      //   dispatch(loginAsync(loginData))
    },
  });

  //   useEffect(()=>{
  //     // console.log(loginResponse)
  //     if(loginResponse){

  //       user.role =='admin'?navigate('/admin-dashboard', { replace: true }):navigate('/home', { replace: true })
  //     }

  //   },[loginResponse])

  return (
    //   <ThemeProvider  theme={theme}>
    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    <ThemeProvider theme={btnTheme}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppBar />
        <Card
          sx={{
            bgcolor: "#ede1d4",
            width: "600px",
            borderRadius: "0px",
            boxShadow: "none",
          }}
        >
          <CardContent sx={{ p: "10%" }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold", my: "10px", color: "secondary" }}
            >
              Log In
            </Typography>
            <Typography
              component="small"
              variant="small"
              sx={{ fontWeight: "", color: "gray" }}
            >
              {"Not a member yet? "}
              <Link href="/signup" variant="" sx={{ color: "#c8a97e" }}>
                {"Sign Up here"}
              </Link>
            </Typography>

            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1, p: "40px" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ py: "10px" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ py: "10px", borderRadius: "0px" }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                className={classes.bgColor}
              >
                Log In
              </Button>
              <Grid container sx={{ justifyContent: "end" }}>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  {/* <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Login;
