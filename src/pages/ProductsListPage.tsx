import React, { lazy } from "react";

const ProductList = lazy(() =>
  import("../app/Products/components/ProductList/ProductList")
);

const ProductsListPage: React.FC = () => <ProductList />;

export default ProductsListPage;
