import React from 'react';
import { Button, Typography, Avatar } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import classes from './UserDetailsPanel.module.css';

const UserDetailsPanel = () => {
    const {user, logout} = useAuth0();
    
    // Redirect to authentication page after logout.
    const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

    // Renders the homepage.
    return (
        <div className={classes.container}>
            <Typography variant="h3">User Details</Typography>
            <div className={classes.userDetailsPanel}>
                <Avatar src={user.picture} alt="user profile" sx={{width:96, height:96, mr: 4 }} />
                <div>
                    <Typography sx={{mt: 3}}><b>Name:</b> {user.name}</Typography>
                    <Typography sx={{mt: 3}}><b>Username:</b> {user.nickname}</Typography>
                    <Typography sx={{mt: 3}}><b>Email:</b> {user.email}</Typography>
                </div>
            </div>
                   
            <Button variant="contained" color="error" onClick={() => logoutWithRedirect()} sx={{mt: 3}}>Logout</Button>
        </div>
    );
}

export default UserDetailsPanel;