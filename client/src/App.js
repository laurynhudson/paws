import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div>
        <img src="../paws.png" className="logo" alt="paws-logo"></img>
      </div>
      <div>
        <img src="../pup.png" className="pup-image" alt="dog" />
      </div>
      <div className="appointment-button">
        {/* want to edit to be a pink, more aestethically pleasing */}
        <Button variant="contained" color="info">
          Schedule an appointment
        </Button>
      </div>
      <div>
        <img src="../treats.png" className="treats-image" alt="dog" />
      </div>
    </div>
  );
}

export default App;
