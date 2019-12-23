import React, { lazy } from "react";
import { connect } from "react-redux";
import { ROUTES } from "../routes/constans";
import { Redirect } from "react-router-dom";
import { getProductsFirestore } from "../app/Products/redux/selectors";
import { DataProduct } from "../app/Products/types/types";

const ProductInfo = lazy(() =>
  import("../app/Products/components/ProductInfo/ProductInfo")
);

type OwnProps = {
  match: {
    params: {
      id: string;
    };
  };
};

type Props = OwnProps & StateProps;

const ProductsInfoPage: React.FC<Props> = ({ match, productFirestore }) => {
  const numberPage = match.params.id;
  const product =
    productFirestore && productFirestore.find(p => numberPage === p.id);

  return (
    <>
      {product ? (
        <ProductInfo product={product} />
      ) : (
        <Redirect to={ROUTES.main} />
      )}
    </>
  );
};

type StateProps = {
  productFirestore: DataProduct[];
};

const mapStateToProps = (state): StateProps => ({
  productFirestore: getProductsFirestore(state),
});

export default connect<StateProps, {}, OwnProps>(
  mapStateToProps,
  {}
)(ProductsInfoPage);
