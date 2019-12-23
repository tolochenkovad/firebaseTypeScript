export type AppProductState = {
  products: Array<DataProduct>;
  loading: boolean;
  error: string | null;
};

export type DataProduct = {
  img: string;
  title: string;
  description: string;
  date: string | number;
  price: number;
  location: string;
  id?: string;
};

export type AddProductActions = {
  addProductRequestAction(): void;
};

export type ProductListActions = {
  deleteProductRequestAction(id?: string): void;
  setProductsRequestAction(): void;
};
