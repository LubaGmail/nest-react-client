import '../App.css'
import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'

const Layout = () => {
    
    return (
        <>
            <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="primary" component="div" className='navbar '>
                        <NavLink to='/home' >
                            Home
                        </NavLink> 
                        <NavLink to='/courses'>
                            Courses
                        </NavLink> 
                        <NavLink to='/dogs'>
                            Dogs
                        </NavLink>
                        <NavLink to='/products' >
                            Products
                        </NavLink> 
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout