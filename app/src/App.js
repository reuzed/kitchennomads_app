import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "./theme";

import { Box, Button } from "@mui/material";

import DeliveryAnimation from "./DeliveryAnimation";
import BoxOpener from "./BoxOpener";
import PaymentScreen from "./PaymentScreen";
import TopBar from "./TopBar";
import OrderButton from "./OrderButton";
import RandomFood from "./RandomFood";

const theme = createTheme(themeOptions);

function App() {
  const [ordered, setOrdered] = useState(false);
  const [paid, setPaid] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <br />
      <Box className="centerFlex">
        {!ordered && <OrderButton setOrdered={setOrdered} />}
        {ordered && !paid && <PaymentScreen setPaid={setPaid} />}
        {paid && !delivered && (
          <DeliveryAnimation setDelivered={setDelivered} />
        )}
        {delivered && !opened && <BoxOpener setOpened={setOpened} />}
        {opened && <RandomFood />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
