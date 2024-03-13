import { useState } from "react";
import {
  createUserDocFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import { Input } from "../UI/Input/Input";
import { Button, BUTTON_TYPE_CLASSES } from "../UI/Button/Button";

import "./SignUpForm.style.scss";

const deafaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(deafaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      createUserDocFromAuth(user, { displayName });
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
      <span>Sign up with us!</span>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <Input
          name={"displayName"}
          value={displayName}
          onChange={handleChange}
          label={"Your name"}
          required={true}
        />
        <Input
          name={"email"}
          value={email}
          onChange={handleChange}
          label={"Your email"}
          type={email}
          required={true}
        />
        <Input
          name={"password"}
          value={password}
          onChange={handleChange}
          label={"Your password"}
          required={true}
          type="password"
        />
        <Input
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={handleChange}
          label={"Confirm your password"}
          required={true}
          type="password"
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.default}>Sign up!</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
