export interface AuthCredentials {
  username?: string;
  email: string;
  password: string;
}

export interface UserInterface {
  email: string;
  username: string;
  bio: null | string;
  token: null | string;
  image: string;
}

export interface AuthValidationErrors {
  [key: string]: string[]
}

export interface AuthState {
  isSubmitting: boolean;
  errors: null | AuthValidationErrors;
  user: null | UserInterface;
  isLoggedIn: null | boolean;
  isLoading: boolean;
}



export interface AuthErrorResponse {
  response: {
    data: {
      errors: AuthValidationErrors
    }
  }
}

export interface AuthSuccessResponse {
  data: {
    user: UserInterface
  }
}