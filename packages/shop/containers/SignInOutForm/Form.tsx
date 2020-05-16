import React, { useContext } from "react";
import SignInForm from "./SignIn";
import SignOutForm from "./SignUp";
import ForgotPassForm from "./ForgotPass";
import { AuthContext } from "contexts/auth/auth.context";

export default function AuthenticationForm() {
  const { authState } = useContext<any>(AuthContext);
  let RenderForm;

  if (authState.currentForm === "signIn") {
    RenderForm = SignInForm;
  }

  if (authState.currentForm === "signUp") {
    RenderForm = SignOutForm;
  }

  if (authState.currentForm === "forgotPass") {
    RenderForm = ForgotPassForm;
  }

  return <RenderForm />;
}
