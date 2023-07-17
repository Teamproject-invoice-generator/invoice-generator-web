import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/invoice-logo.svg"
import { FormEvent, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//import { setDoc, doc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {
    auth,
   // db,
   signInWithGoogle
  } from "../../../../../firebase";


const SignUp =() => {
    const [email, setEmail] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    
    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
   
     
      }
    const handleSignInWithGoogle = async () => {
        try {
          await signInWithGoogle();
          console.log("User signed in with Google successfully!");
        } catch (error) {
          console.log("Error signing in with Google:", error);
        }
      };
    
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  return (
    <div >
      
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div >
                <a href="/" className="flex items-center justify-center">
                  <img 
                  src={Logo} 
                  className="bg-transparent"
                  width={45}
                  height={25}
                   />
                    <h3 className="text-xl font-semibold text-blue-500">
                        InvoiceGen
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form onSubmit={handleSignUp}>
                    <div>
                      <div className=" mx-40  items-center justify-center">
                        <h2 className="text-2xl text-blue-500 font-bold ">Sign Up</h2>
                      </div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium px-1 text-gray-700 undefined"
                        >
                            Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full mt-1 px-1 text-blue-500 border-blue-100 rounded-md shadow-sm focus:outline-none py-2"
                            />
                        </div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium  text-gray-700 undefined"
                        >
                            Company Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="companyname"
                                value={companyname}
                                required
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="block w-full px-2  text-blue-500 mt-1 border-blue-100 rounded-md shadow-sm focus:outline-none py-2"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 px-1 undefined"
                        >
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full mt-1 px-2 text-blue-500 py-2 border-blue-100 rounded-md shadow-sm focus:outline-none   "
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium  text-gray-700 undefined"
                        >
                            Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-2  text-blue-500 mt-1 border-blue-100 rounded-md shadow-sm focus:outline-none py-2"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password_confirmation"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Confirm Password
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="password"
                                required
                                name="password_confirmation"
                                className="block w-full px-2 text-blue-500 mt-1 border-blue-100 rounded-md shadow-sm focus:outline-none py-2"
                            />
                        </div>
                    </div>
                    <a
                        
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="flex items-center mt-4">
                        <button 
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-grey-600">
                    Already have an account?{" "}
                    <span>
                        <a 
                        onClick={()=> navigate("/Login")}
                        className="text-purple-600 hover:underline" href="#">
                            Log in
                        </a>
                    </span>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full" />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full" />
                </div>
                <div className="my-6 space-y-2">
                    <button
                        aria-label="Login with Google"
                        type="button"
                        onClick={handleSignInWithGoogle}
                        className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md -2 -offset-1 dark:border-gray-400 -violet-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Sign up with Google</p>
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
);
}

export default SignUp