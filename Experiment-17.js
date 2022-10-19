import React, { useState } from "react";
import "./styles.css";

function App() {
  const [loan, setLoan] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [rate, setRate] = useState(0);
  const [type, setSelectType] = useState(" ");

  const calculateEMI = () => {
  /* if(tenureType.options[tenureType.selectedIndex].text === "Years")
      tenure =  tenure * 12; */
    var em = loan * rate * ((Math.pow((1+rate),tenure)/(Math.pow((1+rate),tenure)-1)));
    window.alert(em);
    
  };
 

  const submitMe = (e) => {
    e.preventDefault();
    calculateEMI();
  };

  const myselect = () => {
    var item = document.getElementById("tenureType");  
     setSelectType(item.options[item.selectedIndex].text);  
     console.log(type);
  }
  const handleLoanAmount = (e) => {
    setLoan(e.target.value);
  };
  const handleTenure = (e) => {
    setTenure(e.target.value);
  };
  const handleInterestRate = (e) => {
    setRate(e.target.value);
  };

  const clear = () =>{
    setLoan(0);
    setTenure(0);
    setRate(0);
    setSelectType("");
  }
  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <table border="0px" style={{ width: "100%" }}>
        <tr>
          <td> <label>Loan Amount: Rs </label></td>
          <td> <input type="text" name="loan" value={loan} onChange={handleLoanAmount}/></td>
        </tr>
        <tr>
          <td><label> Loan Tenure: </label></td>
          <td><input type="text" name="name" value={tenure} onChange={handleTenure} /></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <select name="tenureType" id="tenureType" onChange={myselect}>
              <option value="Months">Months</option>
              <option value="Years">Years</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label> Interest Rate : </label> </td>
          <td> <input type="text" name="rate" value={rate} onChange={handleInterestRate} /></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>
            <button onClick={clear}>Clear</button>
          </td>
          <td>
            <button onClick={submitMe}>Calculate</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
