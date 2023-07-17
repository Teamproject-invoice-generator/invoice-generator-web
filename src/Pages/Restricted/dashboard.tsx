import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { useContext } from "react";
import InvoiceTop from "../../layout/InvoiceTop";
import InvoiceEdit from "../../Pages/InvoiceEdit/InvoiceEdit";
import { FormContext } from "../../Context/FormContext";
import InvoicePreview from "../../Pages/InvoicePreview/InvoicePreview";
import SideBar from "../../components/Sidebar/SideBar";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";


const Dashboard= () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !user) {
      // Redirect the user to the login page if not logged in
      // You can use a router library like react-router-dom for this
       navigate("/login");
    }
  }, [user, loading]);

  const handleLogout = () => {
    auth.signOut();
    // Redirect the user to the login page after logout
    navigate("/");
    
  };
  const { selectedoptions } = useContext(FormContext);
    
  

  return (
    <div>
      
      <div>
          <div className="flex flex-row items-center px-2 bg-white justify-between pt-4 pb-2">
            <h1><a href="/" className="font-semibold text-xl text-black w-full hover:underlined hover:text-2xl hover:text-blue-500 hover:font-extrabold ">Home</a></h1>
            <div className="flex flex-row items-center gap-10  p-2 justify-between pt-4 pb-2">
            <h1><a href="/" className="font-semibold text-xl text-black w-full hover:underlined hover:text-2xl hover:text-blue-500 hover:font-extrabold ">Myinvoices</a></h1>
            {user && (
            <button 
            className="bg-blue-500 rounded-lg text-white p-2 font-semibold text-lg  w-full hover:underlined hover:text-xl hover:text-white hover:font-extrabold "
            onClick={handleLogout}>Logout</button>
            )}
            </div>
          </div>
          <Divider/>
        <div className=" max-w-full md:w-4/5 flex container mx-0 gap-6 md:mx-20 px-2 md:px-0 py-1 md:py-5 ">
          <div className="flex flex-col md:flex-row w-full">
            <div className=" flex flex-col w-full md:w-4/5">
              <InvoiceTop />
              {selectedoptions === "Edit" ? <InvoiceEdit /> : <InvoicePreview />}
            </div>
            <div className="flex flex-col w-full md:w-1/4">
             <SideBar/>
            </div>
          </div>
        </div>
        </div>
    </div>
    
    
  );
};

export default Dashboard;
