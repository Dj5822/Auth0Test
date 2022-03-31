import React from 'react';
import { Button } from '@material-ui/core';
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
            {JSON.stringify(user)}
            This is the homepage.
            <Button variant="contained" onClick={() => logoutWithRedirect()}>Logout</Button>
        </div>
    );
}

export default Homepage;