import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const btnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        variants: {
          props: { color: "primary" },
          style: {
            // border: `2px dashed ${defaultTheme.palette.secondary.main}`,
            color: "black",
          },
        },
      },
    },
  },
});

export default btnTheme;
