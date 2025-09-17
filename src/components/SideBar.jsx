import * as React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function SideBar() {

    const [isHovered, setHovered] = React.useState(false)

    return (
        <>
        <Box sx={{ display: 'flex' }}>
        
        <Drawer

            sx={{
                flexShrink: 0,
                overflowX: 'hidden',
                '& .MuiDrawer-paper': {
                    backgroundColor:'#161919ff',
                    width: isHovered ? 200 : 70,
                    overflowX: 'hidden',
                    transition: 'width 0.3s ease',
                    boxSizing: 'border-box',
                    color:'white',
                
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />

            
            <Divider />

            <List>

                <ListItem disablePadding>
                <ListItemButton 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    component ={Link} to='/' 
                    sx={{
                        display:'flex',
                        justifyContent: isHovered ? "flex-start" : "center",
                        // minWidth: "auto",
                        alignItems:"center",
                        border:"none"
                        }}
                    >
                    
                    <ListItemIcon 
                        sx={{
                            color:'white',
                            minWidth:0,
                            mr:isHovered? 2:0,
                            justifyContent:'center',
                            display:"flex"
                            
                            }}>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText 
                        primary='Home' 
                        sx={{
                            ml:isHovered ? 1 : 0,
                            // mt:isHovered ? 1 : 0,
                            opacity: isHovered ? 1 : 0,
                            overflow: "hidden",
                            fontSize:10,
                            fontWeight:600,
                            whiteSpace:'nowrap'
                    }}/>
                </ListItemButton>
                </ListItem>
            
            </List>
            <List>

                <ListItem disablePadding>
                <ListItemButton 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    component ={Link} to='/' 
                    sx={{
                        display:'flex',
                        justifyContent: isHovered ? "flex-start" : "center",
                        // minWidth: "auto",
                        alignItems:"center",
                        border:"none"
                        }}
                    >
                    
                    <ListItemIcon 
                        sx={{
                            color:'white',
                            minWidth:0,
                            mr:isHovered? 2:0,
                            justifyContent:'center',
                            display:"flex"
                            
                            }}>
                        <HistoryIcon/>
                    </ListItemIcon>
                    <ListItemText 
                        primary='History' 
                        sx={{
                            ml:isHovered ? 1 : 0,
                            // mt:isHovered ? 1 : 0,
                            opacity: isHovered ? 1 : 0,
                            overflow: "hidden",
                            fontSize:10,
                            fontWeight:600,
                            whiteSpace:'nowrap'
                    }}/>
                </ListItemButton>
                </ListItem>
            
            </List>

            <List>

                <ListItem disablePadding>
                <ListItemButton 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    component ={Link} to='/' 
                    sx={{
                        display:'flex',
                        justifyContent: isHovered ? "flex-start" : "center",
                        // minWidth: "auto",
                        alignItems:"center",
                        border:"none"
                        }}
                    >
                    
                    <ListItemIcon 
                        sx={{
                            color:'white',
                            minWidth:0,
                            mr:isHovered? 2:0,
                            justifyContent:'center',
                            display:"flex"
                            
                            }}>
                        <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText 
                        primary='About' 
                        sx={{
                            ml:isHovered ? 1 : 0,
                            // mt:isHovered ? 1 : 0,
                            opacity: isHovered ? 1 : 0,
                            overflow: "hidden",
                            fontSize:10,
                            fontWeight:600,
                            whiteSpace:'nowrap'
                    }}/>
                </ListItemButton>
                </ListItem>
            
            </List>
            <List>

                <ListItem disablePadding>
                <ListItemButton 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    component ={Link} to='/' 
                    sx={{
                        display:'flex',
                        justifyContent: isHovered ? "flex-start" : "center",
                        // minWidth: "auto",
                        alignItems:"center",
                        border:"none"
                        }}
                    >
                    
                    <ListItemIcon 
                        sx={{
                            color:'white',
                            minWidth:0,
                            mr:isHovered? 2:0,
                            justifyContent:'center',
                            display:"flex"
                            
                            }}>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText 
                        primary='Account' 
                        sx={{
                            ml:isHovered ? 1 : 0,
                            // mt:isHovered ? 1 : 0,
                            opacity: isHovered ? 1 : 0,
                            overflow: "hidden",
                            fontSize:10,
                            fontWeight:600,
                            whiteSpace:'nowrap'
                    }}/>
                </ListItemButton>
                </ListItem>
            
            </List>
            
            <Divider />
            
        </Drawer>

        </Box>
        </>
    )
}

