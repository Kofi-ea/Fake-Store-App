import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const SignOut = () => {
  const navigate = useNavigate();
  const { setUserTag } = useAuth();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserTag(null);

      toast.success("Signed Out successfully");
      navigate("/welcome");
    } catch (error) {
      console.log("Sign-out error", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
