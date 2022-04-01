import { CircularProgress } from "@mui/material";
import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.background} >
      <CircularProgress size={120} />
    </div>
  )
};
  
export default Loading;