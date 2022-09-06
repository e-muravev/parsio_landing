import React from "react";
import { Typography, Grid, Box } from "@mui/material";

const WhatYouGetSection = () => {
  return (
    <Box mt={15}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "rgba(82, 73, 73, 1)",
          textAlign: "center",
          paddingBottom: 10,
        }}
      >
        What you get
      </Typography>
      <Grid container sx={{ paddingBottom: 10 }}>
        <Grid xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
          >
            01
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
            Accurate docs recognition
          </Typography>
          <Typography>
            You will easily get exactly the same digital data excluding manual
            mistakes.
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
          >
            02
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
            Customizable templates
          </Typography>
          <Typography>
            By editing templates you can customize the fields that you need to
            extract from documents.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
          >
            03
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
            Work with different documents
          </Typography>
          <Typography>
            You can capture data from any document type, including invoices,
            purchase orders, and bills of lading
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
          >
            04
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
            Unlimited access
          </Typography>
          <Typography>
            Digitize as many documents as you need and store it here. All your
            recognitions are always available.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatYouGetSection;