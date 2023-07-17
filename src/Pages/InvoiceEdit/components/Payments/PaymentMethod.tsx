import { Input, Select, Form } from 'antd';
import { useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";
import useWindowDimensions from "../../../../hooks/useWindoDimensions";

const PaymentMethod = () => {
  const { forminfo, setFormInfo } = useContext(FormContext);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setFormInfo((prev) => ({ ...prev, methods: value }));
  };
  const options = [
    { value: "Mpesa Paybill", label: "Mpesa Paybill" },
    { value: "Mpesa Till Number", label: "Mpesa Till Number" },
    { value: "Bank Transfer", label: "Bank Transfer" },
    { value: "Bitcoin", label: "CryptoCurrency" },
    { value: "Paypal", label: "Paypal" },
    { value: "Other", label: "Other" },

  ];
  const { width } = useWindowDimensions();
  return (
    <div className=" mt-5">
      <div className="border border-y-stone-950 border-x-white hidden md:grid grid-cols-12 p-1 mb-3">
        <div className="col-span-4">
          <h5>Payment Method</h5>
        </div>
        </div>
    <div className="flex flex-col w-full"> 
    <div className="flex flexcol  w-full md:w-1/2 px-4">
      <div className="flex  w-full">
        <Form
          name="details"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: width-100  }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={"Payment Method"}
            name={"Payment Method"}
            rules={[{ required: true, message: "Payment Method  is required" }]}
          >
            <Select
              placeholder={"Bank"}
              defaultValue={forminfo.methods}
              onChange={handleChange}
              style={{marginLeft: 10}}
              options={options}
            />
          </Form.Item>
          
          
          <Form.Item
            label={"Account Name"}
            name={"Account Name"}
            rules={[
              { required: true, message: "Account Name is required" },
            ]}
          >
            <Input
              placeholder="Account Name"
              defaultValue={forminfo.accname}
              style={{marginLeft: 10}}
              onChange={(e) => {
                forminfo.accname = e.target.value;
              }}
            />
          </Form.Item>

          <Form.Item
            label={"Account Number"}
            name={"Account Number"}
            rules={[
              { required: true, message: "Account Number is required" },
            ]}
          >
            <Input
              placeholder="Account Number"
              defaultValue={forminfo.account}
              style={{marginLeft: 10}}
              onChange={(e) => {
                forminfo.account = e.target.value;
              }}
            />
          </Form.Item>

        </Form>
      </div>
    </div>
    <div className="flex items-start flex-col w-1/2"></div>
  </div>
  </div>
  )
}

export default PaymentMethod