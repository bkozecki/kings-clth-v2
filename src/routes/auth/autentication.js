import SignUpForm from "../../Components/SignUp/SignUpForm";
import SignInForm from "../../Components/SingIn/SignInForm";

import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
