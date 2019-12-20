import { Field, reduxForm, InjectedFormProps } from "redux-form";
import Button from "@material-ui/core/Button";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { addProductAction } from "../../redux/actions";
import {
  AddProductActions,
  DataProduct
} from "../../interfaces/interfaces";
import { FORM } from "../../../../constans/constans";

const renderTextField: React.FC<any> = ({
  label,
  input,
  ...custom
}): React.ReactComponentElement<any> => (
  <TextField label={label} placeholder={label} {...input} {...custom} />
);

interface OwnProps {
  classes: any;
}

type Props = OwnProps & AddProductActions;

const AddProduct: React.FC<InjectedFormProps<DataProduct> & Props> = ({
  classes,
  handleSubmit,
  addProductAction,
}) => {
  const addToFirebase = () => {
    addProductAction();
  };

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
    </form>
  );
};

export default compose<any>(
  connect<{}, AddProductActions, OwnProps, {}>(null, { addProductAction }),
  reduxForm({
    form: FORM.addProduct,
  })
)(AddProduct);
