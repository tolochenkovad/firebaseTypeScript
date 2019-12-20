export const ROUTES = {
  main: "/",
  login: "/login",
  dynamic: {
    product: (id = ":id") => `/product/${id}`,
  },
};
