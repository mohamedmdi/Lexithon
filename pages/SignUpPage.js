import Body from "../components/layout/Body";
import Header from "../components/signup/Header";
import SignUp from "../components/signup/SignUp";
import useBackHandler from "../hooks/useBackHandler";

const SignUpPage = (props) => {
  useBackHandler();

  return (
    <>
      <Header />
      <Body statusBarColor="#f5f3ff">
        <SignUp />
      </Body>
    </>
  );
};

export default SignUpPage;
