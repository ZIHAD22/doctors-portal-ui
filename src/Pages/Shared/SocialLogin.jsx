import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  if (googleLoading) {
    return (
      <p className="btn btn-outline flex justify-center items-center loading">
        Loading...
      </p>
    );
  }
  return (
    <div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-outline w-full"
      >
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
