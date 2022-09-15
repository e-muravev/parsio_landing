import React from "react";
import { Typography, Box } from "@mui/material";
import { UpdateIconMobile, UpdateIcon } from "../../images";
import useMediaQuery from "@mui/material/useMediaQuery";

const workSteps = [
  {
    title: "Template-based recognition",
    sx: {
      position: "absolute",
      left: "1.5%",
      width: "12.5%",
      textAlign: "center",
    },
  },
  {
    title: "Automated template generation & forms understanding",
    sx: {
      position: "absolute",
      left: "18.5%",
      width: "12.5%",
      textAlign: "center",
    },
  },
  {
    title: "Bulk document recognition",
    sx: {
      position: "absolute",
      left: "35.25%",
      width: "12.5%",
      textAlign: "center",
    },
  },
  {
    title: "Webhooks integration",
    sx: {
      position: "absolute",
      left: "52.25%",
      width: "12.5%",
      textAlign: "center",
    },
  },
  {
    title: "Developer API",
    sx: {
      position: "absolute",
      left: "69%",
      width: "12.5%",
      textAlign: "center",
    },
  },
  {
    title: "Multipage document support",
    sx: {
      position: "absolute",
      left: "85%",
      width: "12%",
      textAlign: "center",
    },
  },
];

const UpdatesSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

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
        <Typography sx={{ maxWidth: 500, paddingBottom: 2.5, opacity: 0.5 }}>
          We are launching beta testing for an AI algorithm to recognize
          document on a fly without using templates
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
            mt: 5,
          }}
        >
          {isMobile ? (
            <Box sx={{ maxWidth: 300, width: "100%", position: "relative" }}>
              <UpdateIconMobile />
              <Box
                style={{
                  position: "absolute",
                  width: "30%",
                  left: "-7.5%",
                  top: "22.25%",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 12,
                  textAlign: "center",
                  transform: "rotate(90deg)",
                }}
              >
                <span>We are here</span>
              </Box>
            </Box>
          ) : (
            <Box sx={{ width: "100%", maxWidth: 1200, position: "relative" }}>
              <UpdateIcon />
              {workSteps.map(({ sx, title }) => (
                <Typography sx={sx}>{title}</Typography>
              ))}
              <Box
                style={{
                  position: "absolute",
                  width: "16%",
                  left: "16.5%",
                  top: 0,
                  height: "90%",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 20,
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>We are here</span>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UpdatesSection;
