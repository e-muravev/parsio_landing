import React from "react";
import { Typography, Grid } from "@mui/material";

const ContactUsSection: React.FC = () => {
  return (
    <Grid
      id="contactUs"
      sx={{
        mt: 25,
        p: 10,
        mb: 15,
        backgroundColor: "rgb(242, 243, 245)",
        flexGrow: 1,
      }}
      container
      justifyContent={{ xs: "center", md: "space-between" }}
      alignItems="center"
    >
      <Grid item>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            p: 1,
          }}
        >
          Contact Us
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          spacing={3}
          sx={{
            p: 1,
          }}
          mr={10}
          justifyContent={{ xs: "center", md: "space-between" }}
        >
          <Grid item>
            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              contact@parsio.app
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 700,
              }}
            >
              +4917631248400
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUsSection;
