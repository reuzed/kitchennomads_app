import "./Button.css";
import { Button, Paper } from "@mui/material";

function OrderButton({ setOrdered }) {
  const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };
  return (
    <button
      onMouseUp={async () => {
        await delay(300);
        setOrdered(true);
      }}
    >
      <div className="back" />
      <div className="front">Order</div>
    </button>
  );
}

export default OrderButton;
