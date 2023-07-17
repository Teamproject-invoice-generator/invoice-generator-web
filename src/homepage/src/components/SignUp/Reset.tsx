import  { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { sendPasswordReset } from "../../../../../firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Reset() {
  
  const [email, setEmail] = useState("");
  const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/Reset");
  }, [user, loading]);

 

  return (
    <div className="w-full h-full bg-gray-100">
      <div className="flex flex-col items-center justify-center ">
        <input
          type="text"
          className="text-blue-500 p-1 w-1/3 m-10 rounded-lg px-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
        />
        <button
          className="mb-20 text-blue-500"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;