import { Button } from '@material-ui/core';
import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationPage = () => {
    const {loginWithRedirect} = useAuth0();

    return (<div>
        Not authenticated. 
        Login is required.
        <Button onClick={() => loginWithRedirect()} >login</Button>
    </div>)
}

export default AuthenticationPage;