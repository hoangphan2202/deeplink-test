import { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=vn.f5seconds.wowsport";
  }, []);

  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  );
};

export default SignUp;
