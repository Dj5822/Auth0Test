import React from 'react';
import { Button, Typography } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./Homepage.module.css";

const Homepage = () => {
    const {user, logout} = useAuth0();

    // Redirect to authentication page after logout.
    const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

    // Renders the homepage.
    return (
        <div className={classes.container}>
            <Typography variant="h3">Homepage</Typography>
            <Typography sx={{mt: 3}}>{JSON.stringify(user)}</Typography>
            <Button variant="contained" onClick={() => logoutWithRedirect()} sx={{mt: 3}}>Logout</Button>
        </div>
    );
}

export default Homepage;