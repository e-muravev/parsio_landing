import React from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box p={1} mt={30}>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: 20, md: 24 },
          textAlign: { xs: "justify", md: "center" },
          maxWidth: 850,
          margin: "0 auto",
        }}
      >
        We are working on a Developer API to open an ability for integrations to
        our system. Stay tuned and subscribe to our newsletter!
      </Typography>
      <Grid
        sx={{ pt: 3 }}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md="auto">
          <TextField
            sx={{ width: { xs: "100%", md: "auto" } }}
            label="Your email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md="auto">
          <Button
            sx={{ width: { xs: "100%", md: "246px" } }}
            variant="contained"
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscribeSection;
