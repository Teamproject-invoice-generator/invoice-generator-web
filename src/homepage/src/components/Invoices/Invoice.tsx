
import { FormContext } from "../../../../Context/FormContext";
import { useContext } from "react";
import edit from "../../assets/images/PencilSquare.svg"
import { useNavigate } from "react-router-dom"
import menuicon  from "../../assets/images/menu-icon.svg"
import "dayjs/locale/en";

const Invoice = () => {
  const navigate = useNavigate();
  
  let number = [0];
  const { forminfo, todata, fromdata} = useContext(FormContext);
  number = forminfo?.terms === "none" ? [0] : (forminfo?.terms?.match(/\d+/g) || []).map(Number);
 

  return (
  <div className="h-500 w-full bg-gray-200">
    <div className="flex mx-auto ">
      <div 
      onClick={()=> navigate("/invoicePreview")}
      className="center mt-3 mx-5">
      <img 
      src={ menuicon} 
      alt="menu" 
      width={30}
      height={30}
      />
      </div>
    <div className=" w-3/4 border-2 border-grey-200 bg-white mx-5">
      
     
    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
          <a href="#" className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 -1  focus:bg-blue-300 focus:text-white -blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Paid</a>
        </li>
        <li className="w-full">
          <a href="#" className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 -1  focus:bg-blue-300 focus:text-white -blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Partially Paid</a>
        </li>
        <li className="w-full">
          <a href="#" className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 -1  focus:bg-blue-300 focus:text-white -blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Pending</a>
        </li>
      </ul>
      </div>
      </div>
<div className="container px-8 mx-9">
<ul className="grid my-5 list-disc list-insite ">

  <li className="flex justify-between h-20 w-4/5 my-1 items-center p-5 mx-5 bg-white border border-gray-100 rounded rounded-md">
    <div><a href="/">{forminfo?.number}</a>
    <h3>{forminfo?.date}</h3>
    </div>
    <div>
      <h1>From : {fromdata?.name}</h1>
      <h2> To : {todata?.name}</h2>
    </div>
    <div className="gap-4 flex">
    <img src={edit} alt=""
    width={25}
    height={25}
     />
     <button 
     onClick={() => navigate("/invoicecard")}
     className="bg-blue-500 text-white p-2 rounded rounded-lg">Mark as Paid</button>
     </div>
  </li>


  <li className="flex justify-between h-20 w-4/5 my-1 items-center p-5 mx-5 bg-white border border-gray-100 rounded rounded-md">
    <div><a href="/">Invoice001</a>
    <h3>10-5-2023</h3>
    </div>
    <div>
      <h2>To KCB Bank</h2>
    </div>
    <div className="gap-4 flex">
    <img src={edit} alt=""
    width={25}
    height={25}
     />
     <button 
     onClick={() => navigate("/invoicecard")}
     className="bg-blue-500 text-white p-2 rounded rounded-lg">Mark as Paid</button>
     </div>
  </li>


  <li className="flex justify-between h-20 w-4/5 my-1 items-center p-5 mx-5 bg-white border border-gray-100 rounded rounded-md">
    <div><a href="/">Invoice002</a>
    <h3>10-5-2023</h3>
    </div>
    <div>
      <h2>To COOP Bank</h2>
    </div>
    <div className="gap-4 flex">
    <img src={edit} alt=""
    width={25}
    height={25}
     />
     <button 
     onClick={() => navigate("/invoicecard")}
     className="bg-blue-500 text-white p-2 rounded rounded-lg">Mark as Paid</button>
     </div>
  </li>
 
  
</ul>
</div>


      </div>

  )
}

export default Invoice