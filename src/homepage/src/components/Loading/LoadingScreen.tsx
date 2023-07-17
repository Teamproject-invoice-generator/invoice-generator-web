import Logo from "../../assets/images/invoice-logo.svg";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <img src={Logo} className="w-8 h-8 mr-2" alt="Logo" />
          <h3 className="text-xl font-semibold text-blue-500">InvoiceGen</h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
