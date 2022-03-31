import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./AuthenticationPage.module.css";

const AuthenticationPage = () => {
    const {loginWithRedirect} = useAuth0();

    return (<div className={classes.container}>
        <Typography variant="h3">Not Authenticated</Typography> 
        <Typography variant="h5">Login is required.</Typography> 
        <Button variant="contained" onClick={() => loginWithRedirect()} >login</Button>
    </div>)
}

export default AuthenticationPage;