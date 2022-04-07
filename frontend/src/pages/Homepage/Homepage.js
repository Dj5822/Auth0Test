import React from 'react';
import MessagePanel from '../../components/MessagePanel/MessagePanel';
import UserDetailsPanel from '../../components/UserDetailsPanel/UserDetailsPanel';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from '../../components/Loading/Loading';


const Homepage = () => {
    // Renders the homepage.
    return (
        <div>
            <MessagePanel />
            <UserDetailsPanel />
        </div>
    );
}

export default withAuthenticationRequired(Homepage, {
    onRedirecting: () => <Loading />
});