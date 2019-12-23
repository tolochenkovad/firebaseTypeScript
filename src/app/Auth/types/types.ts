export type AppAuth = {
  auth: AuthStatus;
};

export type AuthStatus = {
  isLoaded: boolean;
  isEmpty: boolean;
};
