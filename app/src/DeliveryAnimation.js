import { Button, Paper } from "@mui/material";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import van from "./assets/van_color_bgless.png";
function DeliveryAnimation({ setDelivered }) {
  useEffect(() => {
    const timeout = setTimeout(() => setDelivered(true), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="slidingdiv">
      <img className="vanimg" src={van} />
    </div>
  );
}

export default DeliveryAnimation;
