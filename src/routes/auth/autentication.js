import styled from "styled-components";

import SignUpForm from "../../Components/SignUp/SignUpForm";
import SignInForm from "../../Components/SingIn/SignInForm";

const Authentication = () => {
  return (
    <AuthWrap>
      <SignUpForm />
      <SignInForm />
    </AuthWrap>
  );
};

export default Authentication;

const AuthWrap = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
`;
