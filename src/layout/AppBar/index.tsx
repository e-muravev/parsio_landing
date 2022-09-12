import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { ParsioLabel } from "../../images";

const pages = ["How it works", "Why it's useful", "What you get", "Contact us"];

const ResponsiveAppBar = ({ anchors }: any) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignUpClick = () => {
    window.location.replace("https://in.parsio.app/signup");
  };

  const handleAnchorClick = (anchor: any, page: string) => {
    const Y_OFFSET = 150; // we need it because scroll doesn't properly work
    const stickyWrapper = document.querySelector("#whyitsuseful-wrapper");

    const resetStickyWrapperHorizontalScroll = () => {
      if (anchor.id === "whatYouGet" || anchor.id === "contactUs") {
        if (stickyWrapper) {
          stickyWrapper.scrollLeft = 99999;
        }
      } else {
        if (stickyWrapper) {
          stickyWrapper.scrollLeft = 0;
        }
      }
    };

    handleCloseNavMenu();

    if (page === "Sign Up") {
      handleSignUpClick();
      return;
    }

    window.scrollBy({
      top: anchor.getBoundingClientRect().top - Y_OFFSET,
      left: 0,
    });

    resetStickyWrapperHorizontalScroll();
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        position: "fixed",
        p: 3,
        maxWidth: 1536,
        top: 0,
        left: 0,
        right: 0,
        margin: "0 auto",
      }}
      position="fixed"
    >
      <Toolbar
        sx={{
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "row-reverse", md: "row" },
        }}
        disableGutters
      >
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            sx={{ marginRight: "-8px" }}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.concat(["Sign Up"]).map((page, idx) => (
              <MenuItem
                key={page}
                onClick={() => handleAnchorClick(anchors[idx], page)}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            width: { xs: 120, md: 182 },
            height: 32,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ParsioLabel />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, idx) => (
            <Typography
              key={page}
              sx={{
                mr: { xs: 5, lg: 10 },
                cursor: "pointer",
                "&:hover": {
                  color: "rgba(43, 80, 228, 1)",
                  textDecoration: "underline",
                },
              }}
              onClick={() => handleAnchorClick(anchors[idx], page)}
            >
              {page}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button onClick={handleSignUpClick} size="large" variant="contained">
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
