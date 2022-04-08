import { Button, Typography } from '@mui/material';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./AuthenticationPage.module.css";

const AuthenticationPage = () => {
    const {loginWithRedirect} = useAuth0();

    // Renders the authentication page.
    return (<div className={classes.container}>
        <Typography variant="h3">Not Authenticated</Typography> 
        <Typography variant="h5" sx={{ mt: 3 }}>Login is required.</Typography> 
        <Button variant="contained" onClick={() => loginWithRedirect()} sx={{ mt: 3 }}>login</Button>
    </div>)
}

export default AuthenticationPage;