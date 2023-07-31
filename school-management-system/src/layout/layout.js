import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Appbar from "./appbar";
import Head from "next/head";
import Sidebar from "./sidebar";


const drawerWidth = 240;
export default function Layout(Props) {
    const { window, children } = Props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    return (
        <>

                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Appbar handleDrawerToggle={handleDrawerToggle}/>
                    <Sidebar window={window} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Toolbar />
                        {children}
                    </Box>
                </Box>

        </>
    );
}

