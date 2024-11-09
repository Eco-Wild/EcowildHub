export interface Comment {
  name: string;
  email: string;
  comment: string;
}

export interface ContactValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  acceptTerms?: boolean;
}
