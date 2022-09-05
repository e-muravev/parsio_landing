import React from "react";
import { Typography, Grid } from "@mui/material";

const ContactUsSection: React.FC = () => {
  return (
    <Grid
      sx={{
        mt: 15,
        backgroundColor: "rgb(242, 243, 245)",
        height: "200px",
        paddingLeft: "-16px",
      }}
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
          }}
        >
          Contact Us
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3} mr={10}>
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
