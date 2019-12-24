import * as React from "react";
import { reduxForm, InjectedFormProps, ConfigProps } from "redux-form";
import AuthForm from "../../../../common/forms/AuthForm";
import RenderTextField from "../../../../common/forms/RenderTextField";
import {
  email,
  isEqualToPassword,
  minLength6,
  password,
  required,
} from "../../../../common/forms/validators";
import { FORM } from "../../../../constans/constans";
import { compose } from "redux";
import { AppValidationProps } from "../../types/types";

const SignUp: React.FC<InjectedFormProps> = props => {
  return (
    <AuthForm
      formTitle="Sign Up"
      fields={[
        {
          type: "text",
          name: "username",
          component: RenderTextField,
          label: "Username",
          required: true,
          validate: [required],
          inputProps: {
            maxLength: 30,
          },
        },
        {
          type: "email",
          name: "email",
          component: RenderTextField,
          label: "Email",
          required: true,
          validate: [required, email],
          inputProps: {
            maxLength: 30,
          },
        },
        {
          type: "password",
          name: "password",
          component: RenderTextField,
          label: "Password",
          required: true,
          validate: [required, minLength6, password],
          inputProps: {
            maxLength: 30,
          },
        },
        {
          type: "password",
          name: "passwordConfirmation",
          component: RenderTextField,
          label: "Confirm password",
          required: true,
          validate: [required, isEqualToPassword],
          inputProps: {
            maxLength: 30,
          },
        },
      ]}
      {...props}
    />
  );
};

export default compose<any>(
  reduxForm<ConfigProps & AppValidationProps>({
    form: FORM.signUP,
  })
)(SignUp);
