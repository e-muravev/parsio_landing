import React from "react";
import { Grid, Typography, Box } from "@mui/material";

interface DescriptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  [prop: string]: any;
}
const DescriptionCard: React.FC<DescriptionCardProps> = ({
  icon,
  title,
  description,
  ...rest
}: DescriptionCardProps) => {
  return (
    <Grid
      item
      xs={12}
      flexShrink="0"
      sx={{
        borderRadius: "86px",
        backgroundColor: "rgba(252, 178, 137, 0.1)",
      }}
      {...rest}
    >
      <Grid container p={{ xs: 4, md: 8 }} spacing={{ xs: 2, md: 6 }}>
        <Grid item xs={12} md={6} pb={{ xs: 0, md: 6 }}>
          {icon}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                pb: 2,
                fontSize: { xs: 12, md: 24 },
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DescriptionCard;
