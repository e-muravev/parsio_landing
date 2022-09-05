import React from "react";
import "./App.css";
import ResponsiveAppBar from "./layout/AppBar";
import { ThemeProvider } from "@emotion/react";
import { createTheme, Typography, Box, Container, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Description from "./layout/Description";
import HowItWorksSection from "./layout/HowItWorks";
import RecognitionWaysSection from "./layout/RecognitionWays";
import WhyItsUsefulSection from "./layout/WhyItUseful";
import WhatYouGetSection from "./layout/WhatYouGet";
import UpdatesSection from "./layout/UpdatesSection";
import SubscribeSection from "./layout/SubscribeSection";
import ContactUsSection from "./layout/ContactUs";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: "rgb(43, 80, 228)",
          color: "white",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <ResponsiveAppBar />
        <Description />
        <HowItWorksSection />
        <RecognitionWaysSection />
        <WhyItsUsefulSection />
        <WhatYouGetSection />
        <UpdatesSection />
        <SubscribeSection />
        <ContactUsSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
