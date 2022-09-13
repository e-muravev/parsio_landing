import React, { useEffect } from "react";
import "./App.css";
import ResponsiveAppBar from "./layout/AppBar";
import { ThemeProvider } from "@emotion/react";
import { createTheme, Typography, Box, Container, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    allVariants: {
      color: "rgba(82,73,73,1)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          backgroundColor: "rgb(43, 80, 228)",
          color: "white",
          minWidth: 160,
          minHeight: 48,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { height: 48 },
      },
    },
  },
});

let anchors: any = [];

function App() {
  useEffect(() => {
    const howItWorks = document.querySelector("#howItWorks");
    const whyItsUseful = document.querySelector("#whyItsUseful");
    const whatYouGet = document.querySelector("#whatYouGet");
    const contactUs = document.querySelector("#contactUs");

    anchors.push(howItWorks);
    anchors.push(whyItsUseful);
    anchors.push(whatYouGet);
    anchors.push(contactUs);
  }, []);

  useEffect(() => {
    // reset scroll after page reload
    const scrollToTop = () => window.scrollTo(0, 0);

    window.addEventListener("beforeunload", scrollToTop);

    return () => {
      window.removeEventListener("beforeunload", scrollToTop);
    };
  }, []);

  const matches = useMediaQuery(
    "(max-height:600px) and (orientation:landscape)"
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 1536, margin: "0 auto" }}>
          <ResponsiveAppBar anchors={anchors} />
          {matches ? (
            <Box sx={{ mt: 15, textAlign: "justify" }}>
              <Typography>
                This type of orientation doesn't support. Please change to
                portrait orientation.
              </Typography>
            </Box>
          ) : (
            <>
              <Description />
              <HowItWorksSection />
              <RecognitionWaysSection />
              <WhyItsUsefulSection />
              <WhatYouGetSection />
              <UpdatesSection />
              <SubscribeSection />
              <ContactUsSection />
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
