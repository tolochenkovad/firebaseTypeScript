import {
  Field,
  reduxForm,
  InjectedFormProps,
  WrappedFieldProps,
} from "redux-form";
import Button from "@material-ui/core/Button";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { AddProductActions, DataProduct } from "../../types/types";
import { FORM } from "../../../../constans/constans";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { addProductRequestAction } from "../../redux/actions";

const useStyles = makeStyles((theme: Theme) => ({
  formBox: {
    marginTop: theme.spacing(3.75),
    border: "1px solid black",
    padding: theme.spacing(3.75),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    marginTop: theme.spacing(2.5),
  },
}));

const renderTextField: React.FC<WrappedFieldProps & { label: string }> = ({
  label,
  input,
  ...custom
}) => <TextField label={label} placeholder={label} {...input} {...custom} />;

type Props = InjectedFormProps<DataProduct> & AddProductActions;

const AddProduct: React.FC<Props> = ({
  handleSubmit,
  reset,
  addProductRequestAction,
}) => {
  const addToFirebase = () => {
    addProductRequestAction();
  };
  const classes = useStyles();

  return (
    <form className={classes.formBox} onSubmit={handleSubmit(addToFirebase)}>
      <Field
        required
        name="img"
        component={renderTextField}
        label="Adress for img"
      />
      <Field required name="title" component={renderTextField} label="Title" />
      <Field
        required
        name="description"
        component={renderTextField}
        label="Description"
      />
      <Field required name="date" component={renderTextField} label="Date" />
      <Field required name="price" component={renderTextField} label="Price" />
      <Field
        required
        name="location"
        component={renderTextField}
        label="Location"
      />
      <Button variant="contained" type="submit" className={classes.btn}>
        Add
      </Button>
      <Button variant="contained" className={classes.btn} onClick={reset}>
        Reset
      </Button>
    </form>
  );
};

export default compose<any>(
  connect(null, { addProductRequestAction }),
  reduxForm({
    form: FORM.addProduct,
  })
)(AddProduct);
