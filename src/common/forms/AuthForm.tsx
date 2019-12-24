import * as React from "react";
import styled from "styled-components";
import { Field, InjectedFormProps } from "redux-form";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Clear from "@material-ui/icons/Clear";
import Done from "@material-ui/icons/Done";

const FormStyles = styled.div`
  .grid-container {
    padding-top: 1rem;
  }
  .form-group {
    width: 100%;
    max-width: 300px;
  }
  .api-error {
    color: red;
    font-size: 0.75rem;
  }
`;

interface AuthFormProps {
  formTitle: string;
  fields: any[];
  social?: any;
}

interface AuthFormField {
  name: string;
  type?: string;
  component?: any;
  label?: string;
  required?: boolean;
  validate?: any;
}

const AuthForm = (props: InjectedFormProps & AuthFormProps) => {
  const {
    formTitle,
    fields,
    handleSubmit,
    pristine,
    reset,
    submitting,
    invalid,
    error,
  } = props;
  return (
    <FormStyles>
      <form onSubmit={handleSubmit}>
        <Grid
          container={true}
          alignItems="center"
          justify="center"
          direction="column"
          className="grid-container"
        >
          <Typography variant="h5">{formTitle}</Typography>
          <FormGroup className="form-group">
            {fields &&
              fields.map((field: AuthFormField, index: number) => (
                <Field
                  name={field.name}
                  {...field}
                  key={`${index}${field.name}`}
                />
              ))}

            {error && <p className="api-error">{error}</p>}
            <Grid
              container={true}
              alignItems="center"
              justify="space-evenly"
              className="grid-container"
            >
              <IconButton
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                <Clear />
              </IconButton>
              <IconButton
                type="submit"
                disabled={pristine || submitting || invalid}
              >
                <Done />
              </IconButton>
            </Grid>
          </FormGroup>
        </Grid>
      </form>
    </FormStyles>
  );
};

export default AuthForm;
