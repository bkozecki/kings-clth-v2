import { useState } from "react";
import {
  signInWithEmailAndPasswordFn,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import styled from "styled-components";

import { Input } from "../UI/Input/Input";
import { Button, BUTTON_TYPE_CLASSES } from "../UI/Button/Button";
import { Text } from "../../Components/UI/Text/Text";

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
    <SingUpWrap>
      <h2>Don't have an account?</h2>
      <Text>Sign in with us!</Text>
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
        <ButtonsWrap>
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Sign in with Google
          </Button>
        </ButtonsWrap>
      </form>
    </SingUpWrap>
  );
};

export default SignInForm;

const SingUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
