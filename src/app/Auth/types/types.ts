export type AppAuth = {
  auth: AuthStatus;
};

export type AuthStatus = {
  isLoaded: boolean;
  isEmpty: boolean;
  displayName: string;
};

export type AppValidationProps = {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

export type SignUpProps = {
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
};

export type LoginProps = {
  email: string;
  password: string;
};
