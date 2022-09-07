import React from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box mt={30}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", maxWidth: 850, margin: "0 auto" }}
      >
        We are working on a Developer API to open an ability for integrations to
        our system. Stay tuned and subscribe to our newsletter!
      </Typography>
      <Grid
        sx={{ pt: 3 }}
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TextField label="Your email" variant="outlined" />
        </Grid>
        <Grid item>
          <Button sx={{ width: "246px" }} variant="contained">
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscribeSection;
