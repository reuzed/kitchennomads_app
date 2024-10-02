import { TextField, Box, Paper, Button } from "@mui/material";

import applepay_symbol from "./assets/applepay_bgless.png";

//display="flex" alignItems="center" justifyContent="center"
function PaymentScreen({ setPaid }) {
  return (
    <>
      <Paper sx={{ bgcolor: "white", width: "40%" }}>
        <Box sx={{ display: "grid", margin: "5%" }}>
          <br />
          Name: <TextField />
          <br />
          Address: <TextField />
          <br />
          <Button onClick={() => setPaid(true)}>
            £40 pppm{" "}
            <img src={applepay_symbol} alt="applepay" className="applelogo" />
          </Button>
          <br />
        </Box>
      </Paper>
    </>
  );
}

export default PaymentScreen;
