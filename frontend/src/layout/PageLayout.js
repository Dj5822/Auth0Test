import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./PageLayout.module.css";

const PageLayout = () => {
    return (
        <div className={classes.background}>
            <Outlet />
        </div>
    );    
}

export default PageLayout;