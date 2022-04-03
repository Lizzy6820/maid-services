import { AppBar, Toolbar,Tabs, Tab, Menu, MenuItem, Typography, Box, Tooltip, IconButton,
  CssBaseline, useTheme, useMediaQuery } from '@mui/material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/main.jpg' 
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DrawerComponent from '../DrawerComponent';





const settings = [ 'Account', 'Logout'];


const Navbar = () => {
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
       };
       const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      
    

  return (
   <>

   <AppBar position="static"  color="transparent"  elevation={0} 
  sx={{
    display: 'flex',
    position: 'sticky',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    backdropFilter: 'blur(8px)'
  }} > 
    <CssBaseline />

    
       <Toolbar>
           <Typography 
            component={Link} to="/" 
           noWrap
           sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
               <img src={logo}  alt='maid logo' height="50px" width="60px"   /> 
           </Typography>
     {isMobile? (<DrawerComponent />):
      (
           <>
       <Tabs TabIndicatorProps={{sx:{background: '#d4a437'}}} textColor="" sx={{marginLeft: 20}} value={value}
        onChange={handleChange} aria-label="tabs">
           <Tab label= "Services" href='#services' value="0" sx={{fontWeight:700}}/>
           <Tab label= "Quality" href='#quality' value="1" sx={{fontWeight:700}}/>
           <Tab label= "Policy" value= "2"  href ='#policy'sx={{fontWeight:700}} />
           <Tab label= "Contact us" value= "3" href='#contact'sx={{fontWeight:700}}/>
         </Tabs>
     
         <Box  sx={{marginRight: 70}}>
         <Tooltip title="Open Account Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{  marginTop:-1 }} >
              <Link to= '/login'>
         </Link>
          <MenuOpenIcon sx={{color:'#d4a437'}}/>
        </IconButton>
        </Tooltip>     
               <Menu 
               sx={{ mt: '45px', marginTop:'30px' }} id="menu-appbar" anchorEl={anchorElUser}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
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
               </Box>        
       </>
      )}  
       </Toolbar>
      
   </AppBar>
   </>
  )
}

export default Navbar