import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

// Go to setting to access profile page.

const pages = ["US Zone Map", "Inspiration" ,"Reviews"];
const settings = ["Profile", "Settings", "Notifications", "Logout"];

function ResponsiveAppBar() {

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const options = [
    { value: "Full Sun", label: "Full Sun" },
    { value: "1-3 Hours", label: "1-3 Hours" },
    { value: "3-6 Hours", label: "3-6 Hours" },
    { value: "6-9 Hours", label: "6-9 Hours" },
    { value: "9-12 Hours", label: "9-12 Hours" },
  ];

  const options2 = [
    { value: "Annuals", label: "Annuals" },
    { value: "Perennials", label: "Perennials" },
    { value: "Shrubs", label: "Shrubs" },
    { value: "Trees", label: "Trees" },
    { value: "Biennial", label: "Biennial" },
  ];

  const options3 = [
    { value: "Spring", label: "Spring" },
    { value: "Summer", label: "Summer" },
    { value: "Fall", label: "Fall" },
    { value: "Winter", label: "Winter" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <h1>Welcome to Plant Assist</h1>
    <h3>Here to assist with all your lanscaping needs.</h3>
    <p><strong>Sun Exposure: {selectedOption}</strong></p>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <br />

      <p><strong>Categories: {selectedOption2}</strong></p>
      <select value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)}>
        {options2.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <br />

      <p><strong>Season: {selectedOption3}</strong></p>
      <select value={selectedOption3} onChange={(e) => setSelectedOption3(e.target.value)}>
        {options3.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      

    <AppBar position="fixed">
      <Container maxWidth='xl'  >
        <Toolbar disableGutters>
        <Link to='/login'>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: 'none',
            }}
          >
            Login
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
           {/* <Link to = '/zones'> */}
            <IconButton
              size='large'              
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            {/* </Link> */}

            <Link to='/zones'>
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
                  <Link to = '/zones'>
                  <Typography textAlign="center"></Typography>
                  </Link>
                </MenuItem>
                
              ))}
            </Menu>
            </Link>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          > 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to='/'>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Flower"
                  src="https://i.pinimg.com/originals/d5/84/b3/d584b30cbb44593a625ed7ee21a3b8e1.jpg"
                />
              </IconButton>
            </Tooltip>
            <Link to='/post'>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
