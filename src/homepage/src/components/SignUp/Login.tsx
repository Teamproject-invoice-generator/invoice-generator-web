import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/invoice-logo.svg";
//import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword} from 'firebase/auth'
import {  signInWithGoogle, auth } from "../../../../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();


  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/dashboard")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
  }
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/" className="flex items-center justify-center">
            <img
              src={Logo}
              className="bg-transparent"
              width={45}
              height={25}
              alt="Logo"
            />
            <h3 className="text-xl font-semibold text-blue-500">InvoiceGen</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleLogin}>
            <div className="mx-40 items-center justify-center">
              <h2 className="text-2xl font-bold text-blue-500">Login</h2>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder="Enter Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full mt-1 px-2 text-blue-500 border-blue-100 rounded-md shadow-sm py-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-2 text-blue-500 py-2 mt-1 border-blue-100 rounded-md shadow-sm focus:outline-none"
                />
              </div>
            </div>
            <a
              onClick={() => navigate("/Reset")}
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot Password?
            </a>
            <div className="flex items-center mt-4">
              <button
                id="login"
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <div
            onClick={() => navigate("/SignUp")}
            className="mt-4 text-grey-600"
          >
            Haven't Signed Up Yet?{" "}
            <span>
              <a className="text-purple-600 hover:underline">Create Account</a>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              onClick={signInWithGoogle}
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md -2 -offset-1 dark:border-gray-400 -violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
