import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { ExtractIcon } from "../../images";

const howItWorksData = [
  {
    src: "https://d2kq0urxkarztv.cloudfront.net/5e8af2cedd55554b639f4f36/2213853/upload-4766d72b-5a21-485f-b148-f808029b726f.png?e=webp&nll=true",
    title: "Upload the document",
    description: "Drag and drop file into app window",
  },
  {
    src: "https://d2kq0urxkarztv.cloudfront.net/5e8af2cedd55554b639f4f36/2213853/upload-2dec82ee-d949-4549-a35c-dce42d8848b5.png?e=webp&nll=true",
    title: "Choose recognition ways",
    description: "Choose template or AI recognition",
  },
  {
    src: "https://d2kq0urxkarztv.cloudfront.net/5e8af2cedd55554b639f4f36/2213853/upload-1a7052b1-849a-47b0-9e56-47501db1f491.png?e=webp&nll=true",
    title: "Recognize!",
    description:
      "The extracted data is fed and stored to the specified storage",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <Box id="howItWorks" mt={48}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "rgba(82, 73, 73, 1)",
          textAlign: "center",
          paddingBottom: { xs: 5, md: 15 },
        }}
      >
        How It Works
      </Typography>
      <Grid container spacing={10} justifyContent="center">
        {howItWorksData.map(({ src, title, description }) => (
          <Grid item xs={12} md={3}>
            <Box pb={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Box
                sx={{
                  maxWidth: { xs: "270px", md: "none" },
                  width: "40%",
                  margin: { xs: "0 auto", md: "0" },
                }}
              >
                <img width={"100%"} src={src} alt="/" />
              </Box>
            </Box>
            <Box pl={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography sx={{ fontWeight: 600, paddingBottom: 2 }}>
                {title}
              </Typography>
              <Typography sx={{ opacity: 0.8 }}>{description}</Typography>
            </Box>
          </Grid>
        ))}
        {/*last element of howItWorksData is different from other*/}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: "40%",
              padding: "12.5px",
              paddingBottom: "28.5px",

              margin: { xs: "0 auto", md: "0" },
              maxWidth: { xs: "270px", md: "none" },
            }}
          >
            <ExtractIcon />
          </Box>
          <Box pl={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{ fontWeight: 600, paddingBottom: 2 }}>
              Extract
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>
              Save you data as a CSV-file to use where you need it
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
