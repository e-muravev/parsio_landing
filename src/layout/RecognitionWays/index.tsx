import React from "react";
import { Typography, Grid, Box } from "@mui/material";

const RecognitionWaysSection: React.FC = () => {
  return (
    <Box>
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
          Recognition ways
        </Typography>
      </Box>
      <Grid container spacing={30}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
          >
            01
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
            Template recognition
          </Typography>
          <Typography>
            You create a template that extracts information from a specific part
            of the document. Useful if you have a lot of documents of the same
            type.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ color: "rgba(56, 92, 237, 1)", fontWeight: 600, pb: 3 }}
          >
            02
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, pb: 2 }}>
            AI recognition
          </Typography>
          <Typography>
            The application structures and classifies data. Helpful if you have
            documents of various types.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecognitionWaysSection;
