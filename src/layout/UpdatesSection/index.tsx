import React from "react";
import { Typography, Box } from "@mui/material";

const UpdatesSection: React.FC = () => {
  return (
    <Box
      mt={{ xs: 20, md: 80 }}
      sx={{
        paddingBottom: { xs: 5, md: 10 },
        textAlign: "left",
        pl: 1,
        pr: 1,
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
      <Box sx={{ textAlign: "justify" }}>
        <Typography sx={{ maxWidth: 500, paddingBottom: 15, opacity: 0.5 }}>
          We are launching beta testing for an AI algorithm to recognize
          document on a fly without using templates
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ec7c7c",
            mt: 5,
            p: 4,
          }}
        >
          <Typography sx={{ fontWeight: 800, textDecoration: "underline" }}>
            SVG here
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdatesSection;
