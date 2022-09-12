import React from "react";
import { Typography, Grid, Box } from "@mui/material";

const whatYouGetData = [
  {
    idx: "01",
    title: "Accurate docs recognition",
    description:
      "You will easily get exactly the same digital data excluding manual mistakes.",
  },
  {
    idx: "02",
    title: "Customizable templates",
    description:
      "By editing templates you can customize the fields that you need to extract from documents.",
  },
  {
    idx: "03",
    title: "Work with different documents",
    description:
      "You can capture data from any document type, including invoices, purchase orders, and bills of lading",
  },
  {
    idx: "04",
    title: "Unlimited access",
    description:
      "Digitize as many documents as you need and store it here. All your recognitions are always available.",
  },
];

const WhatYouGetSection = () => {
  return (
    <Box id="whatYouGet" mt={{ xs: 20, md: 40 }}>
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
      <Grid
        container
        sx={{
          paddingBottom: { xs: 5, md: 10 },
          textAlign: { xs: "center", md: "left" },
        }}
        spacing={{ xs: 5, md: 25 }}
      >
        {whatYouGetData.slice(0, 2).map(({ idx, title, description }) => (
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
            >
              {idx}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
              {title}
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>{description}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={{ xs: 5, md: 25 }}
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {whatYouGetData.slice(2).map(({ idx, title, description }) => (
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
            >
              {idx}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
              {title}
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>{description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatYouGetSection;
