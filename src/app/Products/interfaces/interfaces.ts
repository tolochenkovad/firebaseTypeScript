import { AppAction } from "../../../interfaces/interfaces";

export interface AppProductState {
  products: Array<DataProduct>;
  loading: boolean;
  error: string | null;
}

export interface DataProduct {
  img: string;
  title: string;
  description: string;
  date: string | number;
  price: number;
  location: string;
  id?: string;
}

export interface SetProductionAction extends AppAction {}

export interface DeleteProductAction extends AppAction{
  payload: string;
}

export interface AddProductAction extends AppAction{}

export type ProductsActionsTypes =
  | SetProductionAction
  | DeleteProductAction
  | AddProductAction;

export interface AddProductActions {
  addProductAction(): AddProductAction;
}

export interface ProductListActions {
  deleteProductAction(id: string | undefined): DeleteProductAction;
  setProductsAction(): SetProductionAction;
}
