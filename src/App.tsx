import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homepage/src/views/Home";
import InvoiceLayout from "./layout/InvoiceLayout";
import Login  from "./homepage/src/components/SignUp/Login";
import SignUp from "./homepage/src/components/SignUp/SignUp";
import Invoice from "./homepage/src/components/Invoices/Invoice";
import InvoiceCard from "./homepage/src/components/Invoices/InvoiceCard";
import InvoicePreview from "./Pages/InvoicePreview/InvoicePreview";
import Reset from "./homepage/src/components/SignUp/Reset";
//import Features from "./homepage/src/components/Features/Features";
import Dashboard from "./Pages/Restricted/dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import LoadingScreen from "./homepage/src/components/Loading/LoadingScreen";


function App() {
  return (
    <div className=" w-full h-full bg-gray-100 ">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/InvoiceLayout" element={<InvoiceLayout/>}/>
        <Route path="/InvoicePreview" element={<InvoicePreview/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Invoices" element={<Invoice/>}/>
        <Route path="/Invoicecard" element={
          <PrivateRoute>
        <InvoiceCard/>
        </PrivateRoute>
        }/>
        <Route path="/Reset" element={<Reset/>}/>
        <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard/>
          </PrivateRoute>}/>
        <Route path="/loading" element={<LoadingScreen/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
