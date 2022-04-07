import React, { useState }  from 'react';
import { Button, Typography } from '@mui/material';
import axios from "axios";
import classes from './MessagePanel.module.css';
import { useAuth0 } from "@auth0/auth0-react";

const MessagePanel = () => {
    const [message, setMessage] = useState("");

    const { getAccessTokenSilently } = useAuth0();

    // Makes an API call to the backend.
    const apiTest = async () => {
        try {
            const token = await getAccessTokenSilently();

            const response = await axios.get('api/test', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMessage(response.data);
        }
        catch (err) {
            setMessage(err.error);
        }
        
    }

    return (
    <div className={classes.container} >
        <Typography variant="h3">API Test</Typography>
        <Typography sx={{mt: 3 }}>{message}</Typography>
        <Button variant="contained" onClick={() => apiTest()} sx={{mt: 3 }}>API test</Button>     
    </div>)
}

export default MessagePanel;