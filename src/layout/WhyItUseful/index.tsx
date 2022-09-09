import React, { useEffect, useRef, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import {
  RealEstateIcon,
  LogisticsIcon,
  OfficeAdministrationIcon,
  RecruitmentIcon,
} from "../../images";
import "./index.css";

function isInCenterOfViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  return (
    (rect.top >= 0 &&
      Math.floor(rect.top + rect.height / 2) >
        Math.floor(
          window.innerHeight / 2 || document.documentElement.clientHeight / 2
        ) -
          10 &&
      Math.floor(rect.top + rect.height / 2) <
        Math.floor(
          window.innerHeight / 2 || document.documentElement.clientHeight / 2
        ) +
          10) ||
    (Math.floor(rect.top + rect.height / 2) ===
      Math.floor(
        window.innerHeight / 2 || document.documentElement.clientHeight / 2
      ) &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth))
  );
}

const WhyItsUsefulSection: React.FC = () => {
  const [wrapperHeight, setWrapperHeight] = useState<number | undefined>();
  const [stickyTop, setStickyTop] = useState<number | undefined>();
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // reset scroll after page reload
    const scrollToTop = function () {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", scrollToTop);

    return () => {
      window.removeEventListener("beforeunload", scrollToTop);
    };
  }, []);

  useEffect(() => {
    // set sticky wpapper params
    const setStickyWrapperParams = () => {
      if (ref.current) {
        const stickyTop =
          (window.innerHeight
            ? document.documentElement.clientHeight / 2
            : document.documentElement.clientHeight / 2) -
          ref.current.getBoundingClientRect().height / 2;

        setWrapperHeight(
          ref.current.scrollWidth -
            ref.current.clientWidth +
            window.innerHeight -
            stickyTop
        );
        setStickyTop(stickyTop);
      }
    };

    setStickyWrapperParams();

    window.addEventListener("resize", setStickyWrapperParams);

    return () => {
      window.removeEventListener("resize", setStickyWrapperParams);
    };
  }, []);

  useEffect(() => {
    // horizontal scrolling animation dependent to window scroll
    let lastScrollTop = 0;
    let scrollY = 0;

    const handleScroll = () => {
      if (ref.current) {
        if (isInCenterOfViewport(ref.current)) {
          const st = window.pageYOffset || document.documentElement.scrollTop;

          if (st > lastScrollTop) {
            //downscroll code
            if (scrollY && scrollY !== window.scrollY) {
              ref.current.scrollLeft =
                ref.current.scrollLeft + (window.scrollY - scrollY);
            }

            scrollY = window.scrollY;
          } else {
            // upscroll code
            if (scrollY && scrollY !== window.scrollY) {
              ref.current.scrollLeft =
                ref.current.scrollLeft - (scrollY - window.scrollY);
            }

            scrollY = window.scrollY;
          }
          lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        } else {
          scrollY = 0;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <Box sx={{ height: wrapperHeight }}>
          <Box sx={{ position: "sticky", top: stickyTop }}>
            <Grid
              id="whyitsuseful-wrapper"
              ref={ref}
              container
              flexWrap="nowrap"
              sx={{
                overflowX: "scroll",
              }}
            >
              <Grid
                item
                mr={{ xs: 5, md: 10 }}
                xs={12}
                flexShrink="0"
                sx={{
                  borderRadius: "86px",
                  backgroundColor: "rgba(252, 178, 137, 0.1)",
                }}
              >
                <Grid container p={{ xs: 4, md: 8 }} spacing={{ xs: 2, md: 6 }}>
                  <Grid item xs={12} md={6} pb={{ xs: 0, md: 6 }}>
                    <RealEstateIcon />
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
                        Real estate
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
                        In real estate agencies, managers may manually fill in
                        different forms based on the client's data: e.g. to
                        prepare a real estate purchase contract and a mortgage
                        application, you need a client's tax ID number, passport
                        information, etc. Data extraction usually becomes a long
                        tiresome task. Save your time using Parsio to quickly
                        gather all data just once and then simply copy it
                        wherever necessary.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                mr={{ xs: 5, md: 10 }}
                xs={12}
                flexShrink="0"
                sx={{
                  borderRadius: "86px",
                  backgroundColor: "rgba(252, 178, 137, 0.1)",
                }}
              >
                <Grid container p={{ xs: 4, md: 8 }} spacing={{ xs: 2, md: 6 }}>
                  <Grid item xs={12} md={6}>
                    <LogisticsIcon />
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
                        Logistics
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
                        Processing VGM certificates, bills of lading, proforma
                        invoices, certificates of origin, shipper's letters of
                        instruction and other documents takes a huge amount of
                        time. With Parsio, all you need is to set up a template
                        and process all your standardized documents in bulk:
                        every character will be properly recognized for you to
                        use it wherever you need.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                mr={{ xs: 5, md: 10 }}
                xs={12}
                flexShrink="0"
                sx={{
                  borderRadius: "86px",
                  backgroundColor: "rgba(252, 178, 137, 0.1)",
                }}
              >
                <Grid container p={{ xs: 4, md: 8 }} spacing={{ xs: 2, md: 6 }}>
                  <Grid item xs={12} md={6} mt={"-18.5px"}>
                    <OfficeAdministrationIcon />
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
                        Office administration
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
                        Payment order and invoices processing, incoming and
                        outgoing mail management, verifying partner's data and
                        work with other documents may be a time-consuming task.
                        Using a template to automatically recognize all the
                        necessary information from such documents can save you a
                        lot of time, because recognition with Parsio is done
                        with high speed.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                flexShrink="0"
                sx={{
                  borderRadius: "86px",
                  backgroundColor: "rgba(252, 178, 137, 0.1)",
                }}
              >
                <Grid container p={{ xs: 4, md: 8 }} spacing={{ xs: 2, md: 6 }}>
                  <Grid item xs={12} md={6}>
                    <RecruitmentIcon />
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
                        Recruitment
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
                        Gathering information from candidates' CVs, resumes and
                        cover letters in all their shapes and forms is an
                        exhausting task when you do it manually. Try using
                        Parsio instead: template and AI recognition will help
                        you parse all the needed information you receive and
                        copy it wherever you need.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyItsUsefulSection;
