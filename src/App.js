import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from 'react'
import Form  from "./pages/Form";

import PatientForm from "./components/PatientForm";
import ExpenseForm from "./components/ExpenseForm";
import CRCDetails from "./components/CRCDetails";
import { GptIntegration } from "./components/GptIntegration";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/form" element= {<Form/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/patientform" element= {<PatientForm/>} />
        <Route path="/expensesform" element= {<ExpenseForm/>} />
        <Route path="/ratecarddetails" element= {<CRCDetails/>} />
        <Route path="/gptintegration" element= {<GptIntegration />} />
      </Routes>

    </div>
    )
}

export default App;
