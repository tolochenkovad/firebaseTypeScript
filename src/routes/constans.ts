export const ROUTES = {
  main: "/",
  login: "/login",
  signUp: "/signup",
  dynamic: {
    product: (id = ":id") => `/product/${id}`,
  },
};
