import * as React from "react";
import { reduxForm, InjectedFormProps, ConfigProps } from "redux-form";
import AuthForm from "../../../../common/forms/AuthForm";
import {
  email,
  minLength6,
  required,
} from "../../../../common/forms/validators";
import RenderTextField from "../../../../common/forms/RenderTextField";
import { compose } from "redux";
import { FORM } from "../../../../constans/constans";
import { AppValidationProps } from "../../types/types";

const Login: React.FC<InjectedFormProps> = props => {
  return (
    <AuthForm
      formTitle="Login"
      fields={[
        {
          type: "email",
          name: "email",
          component: RenderTextField,
          label: "Email",
          validate: [required, email],
          required: true,
        },
        {
          type: "password",
          name: "password",
          component: RenderTextField,
          label: "Password",
          validate: [required, minLength6],
          required: true,
        },
      ]}
      {...props}
    />
  );
};

export default compose<any>(
  reduxForm<ConfigProps & AppValidationProps>({
    form: FORM.login,
  })
)(Login);
