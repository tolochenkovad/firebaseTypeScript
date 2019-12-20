import React, { lazy } from "react";
import { connect } from "react-redux";
import { ROUTES } from "../routes/constans";
import { Redirect } from "react-router-dom";
import { getProductsFirestore } from "../app/Products/redux/selectors";
import { DataProduct } from "../app/Products/interfaces/interfaces";

const ProductInfo = lazy(() =>
  import("../app/Products/components/ProductInfo/ProductInfo")
);

interface OwnProps {
  match: {
    params: {
      id: string;
    };
  };
}

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

interface StateProps {
  productFirestore: DataProduct[];
}

const mapStateToProps = (state): StateProps => ({
  productFirestore: getProductsFirestore(state),
});

export default connect<StateProps, {}, OwnProps, {}>(
  mapStateToProps,
  {}
)(ProductsInfoPage);
