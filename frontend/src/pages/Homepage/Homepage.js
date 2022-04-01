import React from 'react';
import { Button, Typography, Avatar } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import MessagePanel from '../../components/MessagePanel/MessagePanel';
import UserDetailsPanel from '../../components/UserDetailsPanel/UserDetailsPanel';


const Homepage = () => {
    // Renders the homepage.
    return (
        <div>
            <MessagePanel />
            <UserDetailsPanel />
        </div>
    );
}

export default Homepage;