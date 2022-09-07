import React from "react";
import { Typography, Box } from "@mui/material";

const UpdatesSection: React.FC = () => {
  return (
    <Box
      mt={{ xs: 20, md: 80 }}
      sx={{
        paddingBottom: { xs: 5, md: 10 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "rgba(82, 73, 73, 1)",
          paddingBottom: 2,
        }}
      >
        Don't miss the update!
      </Typography>
      <Typography sx={{ maxWidth: 500, paddingBottom: 15, opacity: 0.5 }}>
        We are launching beta testing for an AI algorithm to recognize document
        on a fly without using templates
      </Typography>
      <Typography sx={{ pt: 5 }}>SVG here</Typography>
    </Box>
  );
};

export default UpdatesSection;
