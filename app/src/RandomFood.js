import { random } from "mathjs";
import { countries } from "./data/countries";
import { Box, List, ListItem, Paper } from "@mui/material";

const API_KEY = "AIzaSyCk-D99geVTT1Q6mLz6MiFJnlBlF1O9Jeg";
const CSE_ID = "16c3f82f6d75b4aab";
const query = "Bananas";

function handler(data) {
  console.log(data);
}

function triggersearch() {
  //let query = document.getElementById("query").value;
  let JSElement = document.createElement("script");
  JSElement.src =
    `www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CSE_ID}&q=${query}` +
    query +
    "&callback=handler";
  document.getElementsByTagName("head")[0].appendChild(JSElement);
}

function RandomFood() {
  const country = countries[Math.floor(random(0, countries.length))];
  // triggersearch();
  return (
    <>
      <List>
        <ListItem>
          <Paper className="centerFlex">
            <Box>You're receiving food from: </Box>
            <Box className="bigtext">{country}</Box>
          </Paper>
        </ListItem>
        <ListItem>
          <h1>
            Thanks for undertaking a culinary journey with kitchen nomads.
          </h1>
        </ListItem>
      </List>
    </>
  );
}

export default RandomFood;
