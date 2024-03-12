import { useState } from "react";
import {
  signInWithEmailAndPasswordFn,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import "./SignInForm.style.scss";

const deafaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(deafaultFormFields);

  const { email, password } = formFields;

  const logGoogleUser = async () => {
    await signInWithGooglePopup(email, password);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await signInWithEmailAndPasswordFn(email, password);

      setFormFields(deafaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign in with us!</span>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <Input
          name="email"
          value={email}
          onChange={handleChange}
          label="Your email"
          type={email}
          required={true}
        />
        <Input
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          label={"Your password"}
          required={true}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
