import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import Typography from "@material-ui/core/Typography";
import {
  getLoadingProducts,
  getProductsFirestore,
} from "../../redux/selectors";
import AddProduct from "../AddProduct/AddProduct";
import Loading from "../../../../common/loading/Loading";
import { Theme } from "@material-ui/core";
import { DataProduct, ProductListActions } from "../../types/types";
import {
  deleteProductRequestAction,
  setProductsRequestAction,
} from "../../redux/actions";

const useStyles = makeStyles((theme: Theme) => ({
  containerList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
  },
  box: {
    padding: theme.spacing(6.25, 3.75),
    background: "#9fabdc",
  },
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

type Props = StateProps & ProductListActions;

const ProductList: React.FC<Props> = ({
  setProductsRequestAction,
  loadingProducts,
  productFirestore,
  deleteProductRequestAction,
}) => {
  useEffect(() => {
    setProductsRequestAction();
  }, [setProductsRequestAction]);

  const classes = useStyles();

  const deleteProducts = (id?: string) => {
    !id ? console.log("Id is undefined!") : deleteProductRequestAction(id);
  };

  return (
    <Grid className={classes.box}>
      <List className={classes.containerList}>
        {!loadingProducts && productFirestore.length !== 0 ? (
          productFirestore.map(product => (
            <ProductItem
              product={product}
              deleteProducts={deleteProducts}
              key={product.id}
            />
          ))
        ) : !loadingProducts && productFirestore.length === 0 ? (
          <Typography variant="h6">No Product. Please, add product!</Typography>
        ) : (
          <Loading />
        )}
        <Typography variant="h4">Add Product</Typography>
        <AddProduct />
      </List>
    </Grid>
  );
};

type StateProps = {
  productFirestore: DataProduct[];
  loadingProducts: boolean;
};

const mapStateToProps = (state): StateProps => ({
  productFirestore: getProductsFirestore(state),
  loadingProducts: getLoadingProducts(state),
});

export default connect<StateProps, ProductListActions>(mapStateToProps, {
  setProductsRequestAction,
  deleteProductRequestAction,
})(ProductList);
