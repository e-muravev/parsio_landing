import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { ScreenSvg } from "../../images";

const Description: React.FC = () => {
  return (
    <Grid
      container
      spacing={10}
      sx={{ paddingTop: { xs: 18, md: 25 }, pl: 1, pr: 1 }}
    >
      <Grid item xs={12} md={4} lg={4}>
        <Box
          sx={{
            textAlign: "justify",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "rgba(43, 80, 228, 1)",
              pb: { xs: 6, md: 0 },
              ml: "-2.5px",
            }}
            variant="h2"
          >
            PARSIO
          </Typography>
          <Typography>Make paper documents digital in two clicks!</Typography>
          <Typography>
            Parsio uses OCR (Optical Character Recognition) based on AI
            algorithms and customizable templates.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ position: "relative" }}>
          <img
            style={{ width: "100%" }}
            src="https://d2kq0urxkarztv.cloudfront.net/60ac8e4525098000777efb25/2585077/upload-41615d9d-5c77-40c6-a69b-a17f3a16b4e0.png?e=webp&nll=true"
            alt="
        /"
          />
          <Box
            sx={{
              position: "absolute",
              left: "7.5%",
              bottom: 0,
              width: "85%",
            }}
          >
            <ScreenSvg />
            <Box
              sx={{
                position: "absolute",
                left: "20%",
                bottom: 20,
                width: { xs: "40%", md: "50%" },
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://d3n32ilufxuvd1.cloudfront.net/60ac8e4525098000777efb25/2585077/upload-c71d13f5-4198-473d-b512-739ad844cd3a.gif"
                alt="/"
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Description;
