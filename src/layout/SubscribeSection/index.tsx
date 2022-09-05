import React from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box mt={15}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
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
          <TextField size="small" variant="outlined" />
        </Grid>
        <Grid item>
          <Button>Subscribe</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscribeSection;
