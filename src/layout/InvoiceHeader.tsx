import { useContext } from "react";
import { Segmented, Button, Space } from "antd";
import { FormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
//import SignUp from '../homepage/src/components/signUp/SignUp';
//import Download from '../components/Sidebar/components/Download';

const InvoiceHeader = () => {
  const {
    segmentedoptions,
    selectedoptions,
    setSelectedOptions,
  } = useContext(FormContext);

  const navigate = useNavigate();

  return (
    <div>
      
    <div className="flex flex-row justify-between pt-4 pb-2">
    <div onClick={() => navigate("/")}>
    <span className="fill-blue-500">
    <HomeIcon/>
    </span>
      <Button
            size={"large"}
            className="border-2 hover:bg-white border-blue-500 font-semibold bg-blue-500 text-white"    
            
          >
             Home
          </Button>
      </div>
      <div>
        <Segmented
          size={"large"}
          options={segmentedoptions}
          value={selectedoptions}
          defaultValue={segmentedoptions[0]}
          className="bg-blue-400"
          onChange={(e) => {
            setSelectedOptions(e.toString());
          }}
        />
      </div>
      
      <div className="flex flex-row justify-evenly">
        <Space wrap>
        
          <div className="flex flex-col">
            <p className="text-center text-sm text-sky-700">Download invoice now?</p>
            <div className="flex gap-3">
          <Button
            className="flex items-center py-1 px-3 justify-center text-sm text-blue-500 bg-white font-semibold border-2 border-blue-500"       
            onClick={() => navigate("/Login")}
          >
            Login
          </Button>
          <Button
            className="flex items-center py-1 px-2  justify-center font-semibold border-2 border-blue-500 text-blue-500 bg-white"
            onClick={() => navigate("/SignUp")}
          >
            Sign Up
          </Button>
          </div>
          </div>
        </Space>
      </div>
    </div>
    </div>
  );
};

export default InvoiceHeader;
