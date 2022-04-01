import React from 'react';
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