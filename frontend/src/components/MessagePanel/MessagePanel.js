import React, { useState }  from 'react';
import { Button, Typography } from '@mui/material';
import axios from "axios";
import classes from './MessagePanel.module.css';

const MessagePanel = () => {
    const [message, setMessage] = useState("");

    // Makes an API call to the backend.
    const apiTest = async () => {
        const response = await axios.get('api/test');
        setMessage(response.data);
    }

    return (
    <div className={classes.container} >
        <Typography variant="h3">API Test</Typography>
        <Typography sx={{mt: 3 }}>{message}</Typography>
        <Button variant="contained" onClick={() => apiTest()} sx={{mt: 3 }}>API test</Button>     
    </div>)
}

export default MessagePanel;