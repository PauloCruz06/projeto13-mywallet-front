import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../contexts/UserContext";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MyAccount from "./MyAccount";
import Payments from "./Payments";
import Deposits from "./Deposits";

export default function App(){
    const [userdata, setUserdata] = useState("");

    return(
        <UserContext.Provider value={{userdata, setUserdata}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/MyAccount" element={<MyAccount />} />
                    <Route path="/New-deposit" element={<Deposits />} />
                    <Route path="/New-payment" element={<Payments />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}