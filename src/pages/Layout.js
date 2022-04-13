import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import '../App.css'
import { Divider } from '@mui/material';


const Layout = () => {
    
    return (
        <>
            <nav>
                <NavLink to='/home'>
                    Home
                </NavLink> &nbsp;
                <NavLink to='/courses'>
                    Courses
                </NavLink> &nbsp;
                <NavLink to='/dogs'>
                    Dogs
                </NavLink> &nbsp;
                <NavLink to='/products'>
                    Products
                </NavLink> &nbsp;
            </nav>
            <Divider />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout