import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "./App.css";
//f0ead2
//dde5b6
//adc178
//a98467
//6c584c

function TopBar() {
  return (
    <Box className="TopBar">
      Kitchen Nomads
      <Button>
        <MenuIcon
          onClick={() =>
            alert(
              "Kitchen nomads supports the abolition of the two child benefit cap."
            )
          }
        />
      </Button>
    </Box>
  );
}

export default TopBar;
