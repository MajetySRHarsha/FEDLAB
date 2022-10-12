import { useState } from "react";
import "./styles.css";

export default function App() {
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [bmi, setbmi] = useState(0);
  const [c, setc] = useState("Comment");
  const cal = () => {
    //let d=0;
    let d = Number(weight) / (Number(height) * Number(height));
    console.log("Weight", weight);
    console.log("d", d);

    setbmi( d );
    if (d < 16) {
      setc("Severe Thickness" );
    }
    if (d < 17) {
      setc( "Moderate Thickness" );
    }
    if (d < 18.5) {
      setc( "Mild Thickness" );
    }
    if (d < 25) {
      setc( "Normal" );
    }
    if (d < 30) {
      setc( "Overweight" );
    }
    if (d < 35) {
      setc("Obese Class I" );
    }
    if (d < 40) {
      setc( "Obese Class II" );
    }
    if (d > 40) {
      setc("Obese Class III" );
    }
  };
  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <div className="calculator">
        <p>
          {" "}
          Enter the height(in m){" "}
          <input
            type="text"
            onChange={(event) => {
              setheight( event.target.value );

              console.log("height",height);
            }}
          />
        </p>
        <p>
          {" "}
          Enter the weight(in kg){" "}
          <input
            type="text"
            onChange={(event) => {
              setweight(event.target.value);

              console.log("weight",weight);
            }}
          />
        </p>
        <button onClick={cal}>Calculate BMI</button>
      </div>
      <h2>Result:</h2>
      <h3>{bmi},{ c}</h3>
    </div>
  );
}
