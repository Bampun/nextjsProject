import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ScrollToTop from "react-scroll-to-top";



 
interface Props {
  window?: () => Window;
}


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Blog', 'Contact'];


export default function Navbar(Props: Props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Link href="/"> Pharma Legacy </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  

  return (
    <div className={scroll ? "header-wrapper scrolled" : "header-wrapper"}>
      <ScrollToTop smooth />
      <div className='container'>
        <nav className='menu-navbar'>
          <div className='menu-navbar-inner'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography
              variant="h6"
              component="div"
              className='brand'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link href="/"> Pharma Legacy </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='menu-item'>
                <li >
                  <Link href='/'>Home</Link>
                </li>
                <li >
                  <Link href='/About'>About</Link>
                </li>
                <li >
                  <Link href='/Blog'>Blog</Link>
                </li>
                <li >
                  <Link href='/Contact'>Contact Us</Link>
                </li>
            </Box>
          </div>
        </nav>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
    </div>
  )
}
