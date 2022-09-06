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

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "white", boxShadow: "none" }}
      position="static"
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            width: 182,
            height: 32,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ParsioLabel />
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Typography sx={{ mr: 10 }}>{page}</Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button size="large" variant="contained">
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
