import React, { useRef } from "react";
import { Typography, Grid, Box } from "@mui/material";
import {
  RealEstateIcon,
  LogisticsIcon,
  OfficeAdministrationIcon,
  RecruitmentIcon,
} from "../../images";
import DescriptionCard from "./DescriptionCard";

import { useHorizontalScrolling } from "../../hooks";

import "./index.css";

const WhyItsUsefulSection: React.FC = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  useHorizontalScrolling(ref);

  return (
    <Box id="whyItsUseful" mt={{ xs: 20, md: 40 }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "rgba(82, 73, 73, 1)",
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          Why it's useful
        </Typography>
        <Box id="stickyWrapper">
          <Grid id="whyitsuseful-wrapper" ref={ref} container flexWrap="nowrap">
            <DescriptionCard
              title="Real estate"
              description="In real estate agencies, managers may manually fill in
                        different forms based on the client's data: e.g. to
                        prepare a real estate purchase contract and a mortgage
                        application, you need a client's tax ID number, passport
                        information, etc. Data extraction usually becomes a long
                        tiresome task. Save your time using Parsio to quickly
                        gather all data just once and then simply copy it
                        wherever necessary."
              icon={<RealEstateIcon />}
              mr={{ xs: 5, md: 10 }}
            />
            <DescriptionCard
              title="Logistics"
              description="Processing VGM certificates, bills of lading, proforma
                        invoices, certificates of origin, shipper's letters of
                        instruction and other documents takes a huge amount of
                        time. With Parsio, all you need is to set up a template
                        and process all your standardized documents in bulk:
                        every character will be properly recognized for you to
                        use it wherever you need."
              icon={<LogisticsIcon />}
              mr={{ xs: 5, md: 10 }}
            />
            <DescriptionCard
              title="Office administration"
              description="Payment order and invoices processing, incoming and
                        outgoing mail management, verifying partner's data and
                        work with other documents may be a time-consuming task.
                        Using a template to automatically recognize all the
                        necessary information from such documents can save you a
                        lot of time, because recognition with Parsio is done
                        with high speed."
              icon={<OfficeAdministrationIcon />}
              mr={{ xs: 5, md: 10 }}
            />
            <DescriptionCard
              title="Recruitment"
              description="Gathering information from candidates' CVs, resumes and
                        cover letters in all their shapes and forms is an
                        exhausting task when you do it manually. Try using
                        Parsio instead: template and AI recognition will help
                        you parse all the needed information you receive and
                        copy it wherever you need."
              icon={<RecruitmentIcon />}
            />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyItsUsefulSection;
