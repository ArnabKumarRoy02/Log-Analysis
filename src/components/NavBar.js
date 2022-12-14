// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Nav, Navbar, Container } from "react-bootstrap";

// import styles from "../styles/common.module.css";

// import axios from 'axios';



// // function uploadData(data){
// //     await axios.post('https://myendpoint/upload',{
// //       upload-type:'application/json',
// //       data
// //     });
// // }
// const NavBar = () => {
//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       variant="dark"
//       className={`${styles.colorNav} p-4`}
//     >
//       <Container fluid>
//         <Navbar.Brand>
//           <NavLink
//             to="/home"
//             className="link-light text-decoration-none fs-2 fw-bold px-5"
//           >
//             Log Analysis
//           </NavLink>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className="justify-content-end"
//         >
//           <Nav className="" variant="pills">
//             <Nav.Item className="px-5">
//               {/* <Nav.Link> */}
//               <NavLink
//                 to="/home"
//                 className="link-light text-decoration-none fs-5 fw-bolder"
//                 activeClassName="activeTab"
//               >
//                 Home
//               </NavLink>
//               {/* </Nav.Link> */}
//             </Nav.Item>
//             <Nav.Item className="px-5">
//               {/* <Nav.Link> */}
//               <NavLink
//                 to="/ourModel"
//                 className="link-light text-decoration-none fs-5 fw-bolder"
//                 activeClassName="activeTab"
//               >
//                 Our Model
//               </NavLink>
//               {/* </Nav.Link> */}
//             </Nav.Item>

//             <Nav.Item className="px-5">
//               {/* <Nav.Link> */}
//               <NavLink
//                 to="/ourIdeas"
//                 className="link-light text-decoration-none fs-5 fw-bolder"
//                 activeClassName="activeTab"
//               >
//                 Our Ideas
//               </NavLink>
//               {/* </Nav.Link> */}
//             </Nav.Item>

//             <Nav.Item className="px-5">
//               {/* <Nav.Link> */}
//               <NavLink
//                 to="/aboutUs"
//                 className="link-light text-decoration-none fs-5 fw-bolder"
//                 activeClassName="activeTab"
//               >
//                 About Us
//               </NavLink>
//               {/* </Nav.Link> */}
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

// /*

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Nav, Navbar, Container } from "react-bootstrap";

// import styles from "../styles/common.module.css";

// const NavBar = () => {
//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       variant="dark"
//       className={`${styles.colorNav} p-4`}
//     >
//       <Container fluid>
//         <Navbar.Brand>
//           <NavLink
//             to="/home"
//             className="link-light text-decoration-none fs-2 fw-bold px-5"
//           >
//             Log Analysis
//           </NavLink>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className="justify-content-end"
//         >
//           <Nav className="" variant="pills">
//             <Nav.Item className="px-5">
//               <Nav.Link>
//                 <NavLink
//                   to="/home"
//                   className="link-light text-decoration-none fs-5 fw-bolder"
//                 >
//                   Home
//                 </NavLink>
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item className="px-5">
//               <Nav.Link>
//                 <NavLink
//                   to="/ourModel"
//                   className="link-light text-decoration-none fs-5 fw-bolder"
//                 >
//                   Our Model
//                 </NavLink>
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item className="px-5">
//               <Nav.Link>
//                 <NavLink
//                   to="/ourIdeas"
//                   className="link-light text-decoration-none fs-5 fw-bolder"
//                 >
//                   Our Ideas
//                 </NavLink>
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item className="px-5">
//               <Nav.Link>
//                 <NavLink
//                   to="/aboutUs"
//                   className="link-light text-decoration-none fs-5 fw-bolder"
//                 >
//                   About Us
//                 </NavLink>
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;


// */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Our Model', 'Our Ideas', 'About Us'];
const links = ['ourModel', 'ourIdeas', 'aboutUs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
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
    <AppBar position="static">
      <Container maxWidth="xl" sx={{height:"10vh"
    }}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Log Analysis Model
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,ind) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" href={links[ind]}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1}} />
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,ind) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href={links[ind]} style={{ color: 'white',textDecoration:"none"}}>

                {page}
                </a>
               
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
